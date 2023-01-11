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

export class MaterialItem extends Component {
  state = {
    isModalOpen: false,
    id: null,
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
    const { closeModal, openModal } = this;
    const { material, onDelete, onEdit } = this.props;
    const { link, title, id } = material;

    if (id === this.state.id) {
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
            <DeleteButton type="button" onClick={() => onDelete(id)}>
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
