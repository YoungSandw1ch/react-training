import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Input, Label, Button, Error, Forma } from './TodoForm.styled';

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
      <Forma autoComplete="off">
        <Label>
          <Input type="text" name="text" />
          <ErrorMessage component={Error} name="text" />
        </Label>
        <Button type="submit">Добавить</Button>
      </Forma>
    </Formik>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
