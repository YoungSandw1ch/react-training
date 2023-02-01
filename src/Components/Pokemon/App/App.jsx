import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box } from 'Components/Common';
import { PokemonForm } from 'Components/Pokemon/PokemonForm';
import { PokemonInfo } from 'Components/Pokemon/PokemonCard/PokemonInfo';

export function App() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Box p={4} width="container" mx="auto">
      <Box width="three" p={2}>
        <PokemonForm onSubmit={setPokemonName} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer />
      </Box>
    </Box>
  );
}
