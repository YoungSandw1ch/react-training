import { useState, useEffect } from 'react';
import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartList } from './CartList/Cartlist';
import { TotalAmount } from './TotalAmount/TotalAmount';
import { useCallback } from 'react';
import cardAPI from 'services/cardAPI';

export const Cart = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoding, setIsLoading] = useState(false);

  const editItemCount = useCallback(
    (id, step) => {
      setIsLoading(true);
      cardAPI
        .edit(id, step)
        .then(data =>
          setItems(prev =>
            prev.map(item => (item.id === data.id ? data : item))
          )
        )
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    [setIsLoading]
  );

  const deleteItem = useCallback(
    id => {
      setIsLoading(true);
      cardAPI
        .delete(id)
        .then(() => setItems(prev => prev.filter(item => item.id !== id)))
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    [setIsLoading]
  );

  const addItem = item => {
    setIsLoading(true);
    cardAPI
      .add(item)
      .then(data => setItems(prev => [...prev, data]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    cardAPI
      .get()
      .then(data => setItems(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box
      position="relative"
      width="card"
      mx="auto"
      p={4}
      border="normal"
      borderRadius="normal"
      backgroundColor="tableHead"
    >
      <CartForm onSubmit={addItem} />
      {error && <Box as="p">{error}</Box>}
      {isLoding && <Loader>Loading...</Loader>}
      <CartList
        items={items}
        onCountChange={editItemCount}
        onRemoveItem={deleteItem}
      />
      <TotalAmount items={items} />
    </Box>
  );
};
