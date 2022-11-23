import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartListItem } from './CartListItem/CartListItem';
import { TotalAmount } from './TotalAmount/TotalAmount';

export const Cart = ({ initialState }) => {
  return (
    <Box
      width="five"
      mx="auto"
      p={4}
      border="normal"
      borderRadius="normal"
      backgroundColor="tableHead"
    >
      <CartForm />
      <Loader>Loading...</Loader>
      <Box as="ul" listStyle="none" mb={4}>
        {initialState.map(item => (
          <CartListItem
            key={item.id}
            name={item.name}
            count={item.count}
            price={item.price}
          />
        ))}
      </Box>
      <TotalAmount items={initialState} />
    </Box>
  );
};
