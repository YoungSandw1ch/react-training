import PropTypes from 'prop-types';
import { Box } from 'Components/Common';
import { CounterBtn } from './Counter.styled';

export const Counter = ({ value, id, onCountChange }) => {
  const increment = () => onCountChange(id, 1);
  const decrement = () => onCountChange(id, -1);
  const zeroColorChange = value ? 'green' : 'red';
  const isDisabled = value === 1;
  return (
    <Box display="flex" gridColumnGap={3} alignItems="center">
      <CounterBtn
        variant="countButton"
        onClick={decrement}
        disabled={isDisabled}
      >
        -
      </CounterBtn>
      <Box as="span" color={zeroColorChange}>
        {value}
      </Box>
      <CounterBtn variant="countButton" onClick={increment}>
        +
      </CounterBtn>
    </Box>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onCountChange: PropTypes.func.isRequired,
};
