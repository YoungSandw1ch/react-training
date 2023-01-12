import { Box } from 'Components/Common';
import { Formik } from 'formik';
import {
  ModalForm,
  ButtonSubmit,
  ButtonClose,
  Input,
} from './MaterialItemEditModal.styled';
import { FaCheckCircle } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
// import * as ReactDOM from 'react-dom';

export const MaterialItemEditModal = ({ material, onEdit, closeModal }) => {
  const { link, title, id } = material;
  const handleSubmit = async (values, actions) => {
    await onEdit(id, values);
    actions.resetForm();
    closeModal(true);
  };

  //ReactDOM.createPortal
  return (
    <Formik initialValues={{ link, title }} onSubmit={handleSubmit}>
      <ModalForm>
        <Box flexGrow="1">
          <Input type="text" name="link" />
          <Input type="text" name="title" />
        </Box>
        <Box display="flex" flexDirection="column">
          <ButtonSubmit type="submit" aria-label="submit">
            <FaCheckCircle />
          </ButtonSubmit>
          <ButtonClose
            type="button"
            onClick={() => closeModal(true)}
            aria-label="close"
          >
            <AiFillCloseCircle />
          </ButtonClose>
        </Box>
      </ModalForm>
    </Formik>
    // ,document.querySelector('#item-edit-modal')
  );
};
