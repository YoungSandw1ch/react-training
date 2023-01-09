import { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button } from './PokemonForm.styled';
import { FcSearch } from 'react-icons/fc';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleInputChange = e => {
    const name = e.target.value.toLowerCase();
    this.setState({ pokemonName: name });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { pokemonName } = this.state;
    if (pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }

    this.props.onSubmit(pokemonName);
    e.currentTarget.reset();
  };

  render() {
    const { handleFormSubmit, handleInputChange } = this;
    return (
      <Form onSubmit={handleFormSubmit}>
        <Input type="text" name="name" onChange={handleInputChange} />
        <Button>
          <FcSearch />
          Найти
        </Button>
      </Form>
    );
  }
}
