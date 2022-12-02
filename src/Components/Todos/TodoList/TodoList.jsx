import styles from './TodoList.module.css';
import classNames from 'classnames';

export const TodoList = ({ todos, deleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.todoLIst}>
      {todos.map(({ id, text, completed }) => (
        <li
          className={styles.todoList__item}
          key={id}
          onClick={() => onToggleCompleted(id)}
        >
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
          <button
            onClick={() => deleteTodo(id)}
            className={styles.todoList__button}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
