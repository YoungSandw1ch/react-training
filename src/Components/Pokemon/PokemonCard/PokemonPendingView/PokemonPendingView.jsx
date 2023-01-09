import pendingImg from 'images/pending-img.png';
import { Box } from 'Components/Common';
import { PokemonDataView } from 'Components/Pokemon/PokemonCard/PokemonDataView';

export const PokemonPendingView = () => {
  const pokemon = {
    name: 'имя',
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImg,
        },
      },
    },
    stats: [],
  };

  return (
    <>
      <Box as="p">Загрузка</Box>
      <PokemonDataView pokemon={pokemon} />
    </>
  );
};
