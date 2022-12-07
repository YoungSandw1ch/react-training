import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartList } from './CartList/Cartlist';
import { TotalAmount } from './TotalAmount/TotalAmount';

export const Cart = ({ initialState }) => {
  const [items, setItems] = useState(initialState);
  const [isLoding] = useState(false);

  const handleChangeCount = (id, step) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              count: item.count + step > 0 ? item.count + step : 0,
            }
          : item
      )
    );
  };

  const handleRemoveItem = id =>
    setItems(prev => prev.filter(item => item.id !== id));

  const handleSubmit = item => setItems(prev => [...prev, item]);

  return (
    <Box
      width="card"
      mx="auto"
      p={4}
      border="normal"
      borderRadius="normal"
      backgroundColor="tableHead"
    >
      <CartForm onSubmit={handleSubmit} />
      {isLoding && <Loader>Loading...</Loader>}
      <CartList
        items={items}
        onCountChange={handleChangeCount}
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
