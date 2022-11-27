import React, { Component } from 'react';
import { Box } from '../Common/Box.styled';
import { TodoList } from './TodoList';
import todos from 'data/todos.json';

export class App extends Component {
  state = {
    todos,
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodos = todos.length;
    const completedTodos = todos.reduce(
      (acc, t) => (t.completed ? acc + 1 : acc),
      0
    );
    return (
      <Box p={5} mx="auto" width="container">
        <Box mb={3}>
          <p>Общее кол-во: {totalTodos}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </Box>

        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
      </Box>
    );
  }
}
