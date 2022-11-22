import { Box } from 'Components/Common/Box.styled';
import { CartForm } from './CartForm/CartForm';
import { Loader } from './Loader/Loader';
import { CartListItem } from './CartListItem/CartListItem';
import { TotalAmount } from './TotalAmount/TotalAmount';

export const Cart = ({ initialState }) => {
  return (
    <Box>
      <CartForm />
      <Loader>Loading...</Loader>
      <Box as="ul">
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
