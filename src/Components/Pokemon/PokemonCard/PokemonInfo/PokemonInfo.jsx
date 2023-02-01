import PropTypes from 'prop-types';
import pokemonAPI from 'services/pokemonAPI';
import { useState, useEffect } from 'react';
import { Box } from 'Components/Common';
import { PokemonDataView } from '../PokemonDataView';
import { PokemonPendingView } from '../PokemonPendingView';
import { PokemonErrorView } from '../PokemonErrorView';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECT: 'reject',
  RESOLVE: 'resolve',
};

export function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (!pokemonName) return;
    //перед початком запиту міняемо статус на виконуеться, який зміниться в процесі запиту на виконано або відхилено
    setStatus(STATUS.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(STATUS.RESOLVE);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECT);
      });
  }, [pokemonName]);

  if (status === STATUS.IDLE) {
    return <Box>Введите название покемона</Box>;
  }
  if (status === STATUS.PENDING) {
    return <PokemonPendingView />;
  }
  if (status === STATUS.REJECT) {
    return <PokemonErrorView error={error} />;
  }
  if (status === STATUS.RESOLVE) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

PokemonInfo.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
