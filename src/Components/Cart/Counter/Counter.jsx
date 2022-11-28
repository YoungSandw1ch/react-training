import { Box, Button } from 'Components/Common';
import PropTypes from 'prop-types';

export const Counter = ({ value }) => {
  return (
    <Box display="flex" gridColumnGap={3} alignItems="center">
      <Button variant="countButton">-</Button>
      <span>{value}</span>
      <Button variant="countButton">+</Button>
    </Box>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
