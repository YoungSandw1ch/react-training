import PropTypes from 'prop-types';
import { Box } from 'Components/Common';
import { ControlButton } from './Controls.styled';

export const Controls = ({ onClick, prevBtnDisabled, nextBtnDisabled }) => {
  return (
    <Box as="section" mb={4} display="flex" justifyContent="center">
      <ControlButton
        type="button"
        disabled={prevBtnDisabled}
        onClick={() => onClick(-1)}
      >
        Назад
      </ControlButton>
      <ControlButton
        type="button"
        disabled={nextBtnDisabled}
        onClick={() => onClick(1)}
      >
        Вперед
      </ControlButton>
    </Box>
  );
};

Controls.propTypes = {
  onClick: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};
