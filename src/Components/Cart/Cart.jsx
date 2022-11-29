import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartList } from './CartList/Cartlist';
import { TotalAmount } from './TotalAmount/TotalAmount';

export const Cart = ({ initialState }) => {
  const [items, setItems] = useState(initialState);

  const handleDecrement = () => {
    console.log('-');
  };
  const handleIncrement = () => {
    console.log('+');
  };

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
