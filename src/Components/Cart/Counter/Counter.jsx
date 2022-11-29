import PropTypes from 'prop-types';
import { Box, Button } from 'Components/Common';
// import { useState } from 'react';

export const Counter = ({ value, onIncrement, onDecrement }) => {
  // const [count, setCount] = useState(value);

  return (
    <Box display="flex" gridColumnGap={3} alignItems="center">
      <Button variant="countButton" onClick={onDecrement}>
        -
      </Button>
      <span>{value}</span>
      <Button variant="countButton" onClick={onIncrement}>
        +
      </Button>
    </Box>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
