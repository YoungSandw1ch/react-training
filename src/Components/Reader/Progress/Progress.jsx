import PropTypes from 'prop-types';
import { Box } from 'Components/Common';

export const Progress = ({ currentPage, totalPages }) => {
  return (
    <Box as="p">
      {currentPage}/{totalPages}
    </Box>
  );
};

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
