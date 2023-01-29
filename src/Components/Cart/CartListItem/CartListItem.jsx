import PropTypes from 'prop-types';
import { Item, Property, Amount, CloseBtn } from './CartListItem.styled';
import { Counter } from '../Counter';
import { AiFillCloseCircle } from 'react-icons/ai';
import { memo } from 'react';

const CartListItem = ({ item, onCountChange, onRemoveItem }) => {
  const { price, count, name, id, guarantee } = item;
  const amount = +((guarantee ? price * 0.01 + price : price) * count).toFixed(
    1
  );

  const removeItem = () => onRemoveItem(id);
  console.log('render item: ', id);

  return (
    <Item>
      <Property>
        {name} {guarantee && '+g'}:
      </Property>
      <Property>{price}$</Property>

      <Counter id={id} value={count} onCountChange={onCountChange} />

      <Amount>{amount}$</Amount>
      <CloseBtn variant="closeButton" onClick={removeItem} aria-label="close">
        <AiFillCloseCircle />
      </CloseBtn>
    </Item>
  );
};

CartListItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    guarantee: PropTypes.bool.isRequired,
  }),
  onCountChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default memo(CartListItem);
