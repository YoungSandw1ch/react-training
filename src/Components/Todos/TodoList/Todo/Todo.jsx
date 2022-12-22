import styles from '../TodoList.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton } from 'Components/Common/IconButton';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';

export const Todo = ({ completed, text, deleteTodo }) => {
  return (
    <>
      <input
        className={styles.todoList__input}
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <p
        className={classNames(styles.todoList__text, {
          [`${styles.completed}`]: completed,
        })}
      >
        {text}
      </p>
      <IconButton
        onClick={deleteTodo}
        className={styles.todoList__button}
        aria-label="remove todo"
      >
        <DeleteIcon width="25" height="25" />
      </IconButton>
    </>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
