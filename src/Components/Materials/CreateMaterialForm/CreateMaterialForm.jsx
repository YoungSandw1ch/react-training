import { Formik, Field } from 'formik';
import {
  AddButton,
  Label,
  FieldName,
  MaterialForm,
} from './CreateMaterialForm.styled';

export const CreateMaterialForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
    // console.log(values, actions);
  };

  return (
    <Formik initialValues={{ link: '', title: '' }} onSubmit={handleSubmit}>
      <MaterialForm>
        <Label>
          <FieldName>Link</FieldName>
          <Field type="text" name="link" placeholder="link" />
        </Label>
        <Label>
          <FieldName>Title</FieldName>
          <Field type="text" name="title" placeholder="title" />
        </Label>
        <AddButton type="submit">Add</AddButton>
      </MaterialForm>
    </Formik>
  );
};
