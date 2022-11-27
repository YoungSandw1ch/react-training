import styles from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className={styles.todoLIst}>
      {todos.map(({ id, text }) => (
        <li className={styles.todoList__item} key={id}>
          <p className={styles.todoList__text}>{text}</p>
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
