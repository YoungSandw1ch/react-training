import { Cart } from 'Components/Cart/Cart';
import initialState from 'data/initialState.json';

const CartPage = () => {
  return (
    <>
      <Cart initialState={initialState} />
    </>
  );
};

export default CartPage;
