import { Formik, Field, Form } from 'formik';
import { AddButton } from 'Components/Materials/CreateMaterialForm';

export const CreateMaterialForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
    // console.log(values, actions);
  };

  return (
    <Formik initialValues={{ link: '', title: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="link" />
        <Field type="text" name="title" />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </Formik>
  );
};
