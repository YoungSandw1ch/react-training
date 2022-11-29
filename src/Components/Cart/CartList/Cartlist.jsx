import { CartListItem } from '../CartListItem/CartListItem';
import { Box } from 'Components/Common';

export const CartList = ({ items, onIncrement, onDecrement }) => {
  return (
    <Box as="ul" listStyle="none" mb={4}>
      {items.map(item => (
        <CartListItem
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          key={item.id}
          name={item.name}
          count={item.count}
          price={item.price}
        />
      ))}
    </Box>
  );
};
