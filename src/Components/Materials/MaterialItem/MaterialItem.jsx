import { Box } from 'Components/Common';
import {
  TitleText,
  LinkText,
  DeleteButton,
  EditButton,
} from './MaterialItem.styled';
import { GrEdit } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
import { MaterialItemEditModal } from '../MaterialItemEditModal';
import { SkeletonMaterialItem } from '../SkeletonMaterialItem/';
import { useState } from 'react';

export function MaterialItem({ isLoading, material, onDelete, onEdit }) {
  const [index, setIndex] = useState(null);
  const [isRemoved, setIsRemoved] = useState(false);

  const deleteItem = async materialId => {
    setIsRemoved(true);
    setIndex(materialId);
    await onDelete(material.id);
    setIsRemoved(false);
    setIndex(null);
  };

  const openModal = () => setIndex(material.id);

  const closeModal = openModal => {
    if (!openModal) return;
    setIndex(null);
  };

  const { link, title, id } = material;

  if ((isRemoved && id === index) || (isLoading && id === index)) {
    return <SkeletonMaterialItem />;
  }

  if (!isLoading && id === index) {
    return (
      <MaterialItemEditModal
        material={material}
        onEdit={onEdit}
        closeModal={closeModal}
      />
    );
  }

  if (id !== index) {
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
          <EditButton type="button" onClick={openModal}>
            <GrEdit />
          </EditButton>
        </Box>
      </>
    );
  }
}
