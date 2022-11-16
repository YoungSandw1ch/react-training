import PropTypes from 'prop-types';

function TotalAmount({ items }) {
  const amount = items.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <p>Total: {amount}$</p>
  )
}

TotalAmount.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired)
}

export default TotalAmount;