import PropTypes from 'prop-types';
import { Button } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <Button type="button" onClick={onClick} {...allyProps}>
      {children}
    </Button>
  );
};

IconButton.defaultProps = {
  onClick: () => {},
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
