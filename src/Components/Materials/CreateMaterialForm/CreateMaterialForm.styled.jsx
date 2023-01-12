import styled from 'styled-components';
import { Form } from 'formik';

export const MaterialForm = styled(Form)`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const AddButton = styled.button``;

export const Label = styled.label`
  margin-right: ${({ theme }) => theme.space[3]}px;
`;

export const FieldName = styled.span`
  margin-right: ${({ theme }) => theme.space[3]}px;
`;
