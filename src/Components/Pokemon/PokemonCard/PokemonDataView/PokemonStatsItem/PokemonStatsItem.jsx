import PropTypes from 'prop-types';
import { StatName, StatValue, Item } from './PokemonStatsItem.styled';

export const PokemonStatsItem = ({ stat }) => {
  const name = stat.stat.name;
  const value = stat.base_stat;

  return (
    <Item>
      <StatName>{name}: </StatName>
      <StatValue>{value}</StatValue>
    </Item>
  );
};

PokemonStatsItem.propTypes = {
  stat: PropTypes.shape({
    stat: PropTypes.object,
    base_stat: PropTypes.number,
  }),
};
