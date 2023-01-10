import { Box } from 'Components/Common';
import {
  TitleText,
  LinkText,
  DeleteButton,
  EditButton,
} from './MaterialItem.styled';
import { GrEdit } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';

export const MaterialItem = ({ material }) => {
  const { link, title } = material;

  return (
    <>
      <Box>
        <TitleText>{link}</TitleText>
        <LinkText>{title}</LinkText>
      </Box>
      <Box>
        <DeleteButton type="button" onClick={'ss'}>
          <TiDelete />
        </DeleteButton>
        <EditButton type="button" onClick={'ss'}>
          <GrEdit />
        </EditButton>
      </Box>
    </>
  );
};
