import styles from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }) => {
  const completedClass = state => {
    const done = state ? styles.completed : '';
    return `${styles.todoList__text} ${done}`;
  };

  return (
    <ul className={styles.todoLIst}>
      {todos.map(({ id, text, completed }) => (
        <li className={styles.todoList__item} key={id}>
          <p className={completedClass(completed)}>{text}</p>
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
