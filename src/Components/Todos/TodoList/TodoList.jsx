import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos, deleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map(({ id, text, completed }) => (
        <li
          className={styles.todoList__item}
          key={id}
          onClick={() => onToggleCompleted(id)}
        >
          <Todo
            text={text}
            completed={completed}
            deleteTodo={() => deleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  deleteTodo: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};
