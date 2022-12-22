import React, { Component } from 'react';
import { Box } from 'Components/Common';
import { TodoList } from '../TodoList';
import { TodoForm } from '../Form';
import { Filter } from '../Filter';
import { Modal } from 'Components/Common/Modal';
import { Header, Logo, AddButton } from './App.styled';
import { CloseButton } from './App.styled';
import { IconButton } from 'Components/Common/IconButton';
import { ReactComponent as AddIcon } from 'icons/todo-add.svg';
import { ReactComponent as FilterIcon } from 'icons/todo-search.svg';
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
    isFilterShow: false,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    this.setState({ todos: todos });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    if (this.state.todos !== prevState.todos && prevState.isModalShow) {
      this.toggleModal();
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

  toggleFilter = () => {
    this.setState(({ isFilterShow }) => ({ isFilterShow: !isFilterShow }));
  };

  render() {
    const { todos, filter, isModalShow, isFilterShow } = this.state;
    const {
      toggleModal,
      toggleFilter,
      formSubmit,
      changeFilter,
      deleteTodo,
      toggleCompleted,
    } = this;
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
            <AddButton onClick={toggleModal} aria-label="add todos">
              <AddIcon width="40" height="40" />
            </AddButton>
            <IconButton
              type="button"
              onClick={toggleFilter}
              aria-label="search todo"
            >
              <FilterIcon width="40" height="40" />
            </IconButton>
          </Header>

          {isModalShow && (
            <Modal onClose={toggleModal}>
              <CloseButton type="button" onClick={toggleModal} mb={3} ml="auto">
                x
              </CloseButton>
              <TodoForm onSubmit={formSubmit} />
            </Modal>
          )}

          {isFilterShow && <Filter onChange={changeFilter} filter={filter} />}
          <TodoList
            todos={filteredTodo}
            deleteTodo={deleteTodo}
            onToggleCompleted={toggleCompleted}
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
