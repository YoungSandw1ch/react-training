import PropTypes from 'prop-types';
import { Box, Button } from 'Components/Common';

export const Counter = ({ value, id, onIncrement, onDecrement }) => {
  const increment = () => onIncrement(id);
  const decrement = () => onDecrement(id);
  return (
    <Box display="flex" gridColumnGap={3} alignItems="center">
      <Button variant="countButton" onClick={decrement}>
        -
      </Button>
      <span>{value}</span>
      <Button variant="countButton" onClick={increment}>
        +
      </Button>
    </Box>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
