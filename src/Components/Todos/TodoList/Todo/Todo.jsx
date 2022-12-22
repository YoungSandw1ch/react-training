import styles from '../TodoList.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      <button onClick={deleteTodo} className={styles.todoList__button}>
        X
      </button>
    </>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
