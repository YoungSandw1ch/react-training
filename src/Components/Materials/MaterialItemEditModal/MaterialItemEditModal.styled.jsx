import styled from 'styled-components';
import { Form, Field } from 'formik';
import { IconButton } from 'Components/Common/IconButton';

export const ModalForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Input = styled(Field)`
  padding: 2px;
  border: 1px solid grey;
  border-radius: ${({ theme }) => theme.radii.normal};
  display: block;
  width: 90%;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ButtonSubmit = styled(IconButton)`
  padding: 0;
  color: black;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonClose = styled(IconButton)`
  color: black;
  padding: 0;
  & svg {
    width: 22px;
    height: 22px;
  }
`;
