import styles from './TodoList.module.css';

export const TodoList = ({ todos, deleteTodo }) => {
  const completedClass = state => {
    const done = state ? styles.completed : '';
    return `${styles.todoList__item} ${done}`;
  };

  return (
    <ul className={styles.todoLIst}>
      {todos.map(({ id, text, completed }) => (
        <li className={completedClass(completed)} key={id}>
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
