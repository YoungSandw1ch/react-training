import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartList } from './CartList/Cartlist';
import { TotalAmount } from './TotalAmount/TotalAmount';

export const Cart = ({ initialState }) => {
  const [items, setItems] = useState(initialState);

  const handleDecrement = id => {
    setItems(prev =>
      prev.map(item => {
        const count =
          item.id === id
            ? item.count - 1 < 1
              ? 0
              : item.count - 1
            : item.count;
        return { ...item, count };
      })
    );
  };

  const handleIncrement = id => {
    console.log('+', id);
  };

  const handleRemoveItem = id =>
    setItems(prev => prev.filter(item => item.id !== id));

  return (
    <Box
      width="card"
      mx="auto"
      p={4}
      border="normal"
      borderRadius="normal"
      backgroundColor="tableHead"
    >
      <CartForm />
      <Loader>Loading...</Loader>
      <CartList
        items={items}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemoveItem={handleRemoveItem}
      />
      <TotalAmount items={items} />
    </Box>
  );
};

Cart.propTypes = {
  initialState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
