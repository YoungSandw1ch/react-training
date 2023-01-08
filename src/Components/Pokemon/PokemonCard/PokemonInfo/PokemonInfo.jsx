import { Component } from 'react';
import { Box } from 'Components/Common';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    status: STATUS.IDLE,
  };

  render() {
    return (
      <Box>
        <Box>Покемон</Box>
      </Box>
    );
  }
}
