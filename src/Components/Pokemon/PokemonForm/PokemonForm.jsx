import { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Input, Form } from 'Components/Pokemon/PokemonForm';
import { FcSearch } from 'react-icons/fc';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.warn('Введите имя покемона', { autoClose: 2500 });
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
    e.currentTarget.reset();
  };

  handleInputChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { handleSubmit, handleInputChange } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Input type="text" onChange={handleInputChange} />
        <Button type="submit">
          <FcSearch />
          Найти
        </Button>
      </Form>
    );
  }
}
