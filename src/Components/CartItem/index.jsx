import PropTypes from 'prop-types';

function CartItem({ item }) {
  const amount = item.price * item.count;

  return (
    <li className="card-item">
      <span>{item.name}</span>
      <span>{item.price}$</span>

      <div>
        <button>-</button>
        <span>{item.count}</span>
        <button>+</button>
      </div>

      <span>{amount}$</span>
      <button>x</button>
    </li>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default CartItem;