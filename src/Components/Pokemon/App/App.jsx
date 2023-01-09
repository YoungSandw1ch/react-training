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
    const { pokemonName } = this.state;
    return (
      <Box p={4} width="container" mx="auto">
        <Box width="three" p={2}>
          <PokemonForm onSubmit={this.handleFormSubmit} />
          <PokemonInfo pokemonName={pokemonName} />
          <ToastContainer />
        </Box>
      </Box>
    );
  }
}
