import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button } from './PokemonForm.styled';
import { FcSearch } from 'react-icons/fc';

export function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = e => {
    const name = e.target.value.toLowerCase();
    setPokemonName(name);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }

    onSubmit(pokemonName);
    setPokemonName('');
    e.currentTarget.reset();
  };

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

PokemonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
