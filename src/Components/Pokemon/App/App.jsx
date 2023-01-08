import { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from 'Components/Common';
import { PokemonForm } from 'Components/Pokemon/PokemonForm';
import { PokemonInfo } from 'Components/Pokemon/PokemonCard/PokemonInfo';

export class App extends PureComponent {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <Box mx="auto" width="container" p={4}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo />
        <ToastContainer />
      </Box>
    );
  }
}
