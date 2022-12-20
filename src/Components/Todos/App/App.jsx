import React, { Component } from 'react';
import { Box } from '../../Common/Box.styled';
import { TodoList } from '../TodoList';
import { TodoForm } from '../Form';
import { Filter } from '../Filter';
import { Modal } from 'Components/Common/Modal';
import { Header, Logo, AddButton, FilterButton } from './App.styled';
import todos from 'data/todos.json';

export class App extends Component {
  state = {
    todos,
    filter: {
      text: '',
      fulfilled: true,
      notFulfilled: true,
    },
    isModalShow: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    this.setState({ todos: todos });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

  formSubmit = todo => {
    console.log('todo: ', todo);
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  changeFilter = e => {
    const { text, fulfilled, notFulfilled } = this.state.filter;
    let filter = { text, fulfilled, notFulfilled };
    switch (e.currentTarget.name) {
      case 'text':
        filter.text = e.currentTarget.value;
        break;
      case 'fulfilled':
        filter.fulfilled = e.currentTarget.checked;
        break;
      case 'notFulfilled':
        filter.notFulfilled = e.currentTarget.checked;
        break;
      default:
        console.log('');
    }
    this.setState(prevState => ({ ...prevState, filter }));
  };

  createFilterTodos = (todos, { text, fulfilled, notFulfilled }) => {
    const normalizeFilter = text.toLowerCase().trim();
    let completedFilter = todos.reduce((acc, todo) => {
      if (fulfilled && todo.completed) acc.push(todo);
      if (notFulfilled && !todo.completed) acc.push(todo);
      return acc;
    }, []);

    if (!normalizeFilter) return completedFilter;
    return completedFilter.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ isModalShow }) => ({ isModalShow: !isModalShow }));
  };

  render() {
    const { todos, filter, isModalShow } = this.state;
    const totalTodos = todos.length;
    const completedTodos = this.countCompletedTodos(todos);
    const filteredTodo = this.createFilterTodos(todos, filter);

    return (
      <Box p={5} mx="auto" width="container">
        <Box
          width="five"
          border="normal"
          borderRadius="normal"
          backgroundColor="lightYellow"
          p={3}
        >
          <Header>
            <Logo>TODOS</Logo>
            <AddButton type="button" onClick={this.toggleModal}>
              Add
            </AddButton>
            <FilterButton type="button">Search</FilterButton>
          </Header>
          {isModalShow && (
            <Modal>
              <TodoForm onSubmit={this.formSubmit} />
            </Modal>
          )}
          <Filter onChange={this.changeFilter} filter={filter} />
          <TodoList
            todos={filteredTodo}
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
            <Box as="p">Общее кол-во: {totalTodos}</Box>
            <Box as="p">Кол-во выполненных: {completedTodos}</Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
