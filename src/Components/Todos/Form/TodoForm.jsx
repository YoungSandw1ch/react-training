import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { TextArea, Label, Button } from './TodoForm.styled';

const schema = yup.object().shape({
  text: yup.string().required().min(3).max(20),
});

const initialValues = { text: '' };

export const TodoForm = ({ onSubmit }) => {
  const handleSubmit = ({ text }, { resetForm }) => {
    console.log('text: ', text);
    if (!text) return;

    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    onSubmit(todo);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <Label>
          <TextArea type="text" name="text" />
          <ErrorMessage name="text" />
        </Label>
        <Button type="submit">Добавить</Button>
      </Form>
    </Formik>
  );
};
