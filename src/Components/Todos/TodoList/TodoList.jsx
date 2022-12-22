import styles from './TodoList.module.css';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import listStyles from 'css/listStyles.module.css';

export const TodoList = ({ todos, deleteTodo, onToggleCompleted }) => {
  return (
    <TransitionGroup component="ul" className={styles.todoList}>
      {todos.map(({ id, text, completed }) => (
        <CSSTransition key={id} timeout={250} classNames={listStyles}>
          <li
            className={styles.todoList__item}
            onClick={() => onToggleCompleted(id)}
          >
            <Todo
              text={text}
              completed={completed}
              deleteTodo={() => deleteTodo(id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
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
