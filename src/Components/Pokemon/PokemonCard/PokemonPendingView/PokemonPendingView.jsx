import pendingImg from 'images/pending-img.png';
import { Box } from 'Components/Common';
import { Spinner } from './PokemonPendingView.styled';
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
      <Box as="p">
        <Spinner />
        Загрузка
      </Box>
      <PokemonDataView pokemon={pokemon} />
    </>
  );
};
