import PropTypes from 'prop-types';
import CartItem from '../CartItem/index';

function CartList({ items }) {
  return (
    <ul className="cart-list">
      {items.map(item => <CartItem key={item.id} item={item} />)}
    </ul>
  )
}

CartList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
}

export default CartList;