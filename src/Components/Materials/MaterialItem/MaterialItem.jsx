import { Box } from 'Components/Common';
import {
  TitleText,
  LinkText,
  DeleteButton,
  EditButton,
} from './MaterialItem.styled';
import { GrEdit } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';

export const MaterialItem = ({ material, onDelete }) => {
  const { link, title, id } = material;

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
        <EditButton type="button" onClick={() => onDelete(id)}>
          <GrEdit />
        </EditButton>
      </Box>
    </>
  );
};
