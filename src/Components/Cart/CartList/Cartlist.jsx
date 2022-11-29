import PropTypes from 'prop-types';
import { CartListItem } from '../CartListItem/CartListItem';
import { Box } from 'Components/Common';

export const CartList = ({ items, onIncrement, onDecrement, onRemoveItem }) => {
  return (
    <Box as="ul" listStyle="none" mb={4}>
      {items.map(item => (
        <CartListItem
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemoveItem={onRemoveItem}
          key={item.id}
          item={item}
        />
      ))}
    </Box>
  );
};

CartList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
