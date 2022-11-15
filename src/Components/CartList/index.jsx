import CartItem from '../CartItem/index';

function CartList() {
  return (
    <ul className="cart-list">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  )
}

export default CartList;