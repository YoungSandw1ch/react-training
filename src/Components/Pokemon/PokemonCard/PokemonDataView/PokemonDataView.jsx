import PropTypes from 'prop-types';
import { Box } from 'Components/Common';
import { Name, Img } from './PokemonDataView.styled';
import { PokemonStatsItem } from './PokemonStatsItem';

export const PokemonDataView = ({ pokemon }) => {
  console.log(pokemon);
  const { name, sprites, stats } = pokemon;
  const url = sprites.other['official-artwork'].front_default;

  return (
    <Box width="240px">
      <Img alt={name} src={url} width="240" height="100" />
      <Name>{name}</Name>
      <Box as="ul">
        {stats.map((stat, i) => (
          <PokemonStatsItem key={i} stat={stat} />
        ))}
      </Box>
    </Box>
  );
};

PokemonDataView.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object,
    stats: PropTypes.array,
  }),
};
