import React, { Component } from 'react';
import { Box } from '../Common/Box.styled';
import { TodoList } from './TodoList';
import { TodoForm } from './Form';
// import { Filter } from './Filter';
import todos from 'data/todos.json';

export class App extends Component {
  state = {
    todos,
    filter: '',
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  countCompletedTodos = todos =>
    todos.reduce((acc, t) => (t.completed ? acc + 1 : acc), 0);

  toggleCompleted = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  handleSubmit = todo => {
    console.log('todo: ', todo);
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  changeFilter = e => {
    const filter = e.currentTarget.value;
    this.setState(prevState => ({ ...prevState, filter }));
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;
    const completedTodos = this.countCompletedTodos(todos);

    return (
      <Box p={5} mx="auto" width="container">
        <Box
          width="five"
          border="normal"
          borderRadius="normal"
          backgroundColor="lightYellow"
          p={3}
        >
          <TodoForm onSubmit={this.handleSubmit} />
          <label>
            Фильтрация заметок
            <input
              type="text"
              name="text"
              value={filter}
              onChange={this.changeFilter}
            />
          </label>
          {/* <Filter onChange={this.changeFilter} /> */}
          <TodoList
            todos={todos}
            deleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <Box
            mb={3}
            display="flex"
            gridColumnGap={4}
            justifyContent="center"
            fontSize="xm"
          >
            <p>Общее кол-во: {totalTodos}</p>
            <p>Кол-во выполненных: {completedTodos}</p>
          </Box>
        </Box>
      </Box>
    );
  }
}
