import { Component } from 'react';
import { Box } from 'Components/Common';
import pokemonAPI from 'services/pokemonAPI';
import { PokemonDataView } from '../PokemonDataView';
import { PokemonPendingView } from '../PokemonPendingView';
import { PokemonErrorView } from '../PokemonErrorView';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECT: 'reject',
  RESOLVE: 'resolve',
};

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: STATUS.IDLE,
  };

  componentDidUpdate(pProps, pState) {
    const prevName = pProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName === nextName) return;
    const pokemonName = this.props.pokemonName;
    //перед початком запиту міняемо статус на виконуеться, який зміниться в процесі запиту на виконано або відхилено
    this.setState({ status: STATUS.PENDING });

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => this.setState({ pokemon, status: STATUS.RESOLVE }))
      .catch(error => this.setState({ error, status: STATUS.REJECT }));
  }

  render() {
    const { pokemon, error, status } = this.state;

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
}
