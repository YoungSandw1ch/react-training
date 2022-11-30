import PropTypes from 'prop-types';
import { Box, Button } from 'Components/Common';

export const Counter = ({ value, id, onCountChange }) => {
  const increment = () => onCountChange(id, 1);
  const decrement = () => onCountChange(id, -1);
  const zeroColorChange = value ? 'green' : 'red';
  return (
    <Box display="flex" gridColumnGap={3} alignItems="center">
      <Button variant="countButton" onClick={decrement}>
        -
      </Button>
      <Box as="span" color={zeroColorChange}>
        {value}
      </Box>
      <Button variant="countButton" onClick={increment}>
        +
      </Button>
    </Box>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onCountChange: PropTypes.func.isRequired,
};
