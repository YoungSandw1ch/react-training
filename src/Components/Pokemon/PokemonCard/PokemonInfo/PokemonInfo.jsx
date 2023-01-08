import { Component } from 'react';
import { Box } from 'Components/Common';
import pokemonAPI from 'services/pokemonAPI';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: STATUS.IDLE,
  };

  componentDidUpdate(pProps, pState) {
    if (pProps.pokemonName === this.props.pokemonName) return;

    this.setState({ status: STATUS.PENDING });
    pokemonAPI
      .fetchPokemon(this.props.pokemonName)
      .then(pokemon => this.setState({ pokemon, status: STATUS.RESOLVED }))
      .catch(error => this.setState({ error, status: STATUS.REJECTED }));
  }

  render() {
    const { pokemon, status, error } = this.state;

    if (status === STATUS.IDLE) {
      return <Box>Введите имя покемона</Box>;
    }

    if (status === STATUS.PENDING) {
      return <Box>Загружаем...</Box>;
    }
    if (status === STATUS.REJECTED) {
      return <Box>{error.message}</Box>;
    }
    if (status === STATUS.RESOLVED) {
      return (
        <Box>
          <p>{pokemon.name}</p>
        </Box>
      );
    }
  }
}
