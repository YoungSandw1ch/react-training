import { Box } from 'Components/Common';
import {
  TitleText,
  LinkText,
  DeleteButton,
  EditButton,
} from './MaterialItem.styled';
import { GrEdit } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
import { Component } from 'react';
import { MaterialItemEditModal } from '../MaterialItemEditModal';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTextBox, SkeletonButtonBox } from '../SkeletonMaterialsItems';
import { SkeletonMaterialItem } from '../SkeletonMaterialItem/';

export class MaterialItem extends Component {
  state = {
    isModalOpen: false,
    id: null,
    isRemoved: false,
  };

  deleteItem = async materialId => {
    const { onDelete } = this.props;
    const { id } = this.props.material;

    this.setState({ isRemoved: true, id: materialId });
    await onDelete(id);
    this.setState({ isRemoved: false, id: null });
  };

  openModal = id => {
    this.setState({ isModalOpen: true, id });
    // console.log(this.state);
  };

  closeModal = openModal => {
    if (openModal) {
      this.setState({ isModalOpen: false, id: null });
      // console.log('close');
    }
  };

  render() {
    const { isRemoved } = this.state;
    const { closeModal, openModal, deleteItem } = this;
    const { material, onEdit, isLoading } = this.props;
    const { link, title, id } = material;

    if (isRemoved && id === this.state.id) {
      return <SkeletonMaterialItem />;
    }

    if (isLoading && id === this.state.id) {
      return (
        <>
          <SkeletonTextBox>
            <Skeleton count={2} height={16} style={{ marginBottom: '8px' }} />
          </SkeletonTextBox>
          <SkeletonButtonBox>
            <Skeleton
              count={2}
              circle
              width={20}
              height={20}
              style={{ marginBottom: '8px' }}
            />
          </SkeletonButtonBox>
        </>
      );
    }

    if (!isLoading && id === this.state.id) {
      return (
        <MaterialItemEditModal
          material={material}
          onEdit={onEdit}
          closeModal={closeModal}
        />
      );
    }

    if (id !== this.state.id) {
      return (
        <>
          <Box>
            <TitleText>{link}</TitleText>
            <LinkText>{title}</LinkText>
          </Box>
          <Box>
            <DeleteButton type="button" onClick={() => deleteItem(id)}>
              <TiDelete />
            </DeleteButton>
            <EditButton type="button" onClick={() => openModal(id)}>
              <GrEdit />
            </EditButton>
          </Box>
        </>
      );
    }
  }
}
