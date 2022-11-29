import PropTypes from 'prop-types';
import { Item, Property, Amount } from './CartListItem.styled';
import { Button } from 'Components/Common';
import { Counter } from '../Counter';

export const CartListItem = ({ item, onCountChange, onRemoveItem }) => {
  const { price, count, name, id } = item;
  const amount = price * count;
  const removeItem = () => onRemoveItem(id);

  return (
    <Item>
      <Property>{name} :</Property>
      <Property>{price}$</Property>

      <Counter id={id} value={count} onCountChange={onCountChange} />

      <Amount>{amount}$</Amount>
      <Button variant="closeButton" onClick={removeItem}>
        x
      </Button>
    </Item>
  );
};

CartListItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onCountChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};
