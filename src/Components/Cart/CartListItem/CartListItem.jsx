import PropTypes from 'prop-types';
import { Item, Property, Amount } from './CartListItem.styled';
import { Button } from 'Components/Common';
import { Counter } from '../Counter';

export const CartListItem = ({
  name,
  count,
  price,
  onIncrement,
  onDecrement,
}) => {
  const amount = price * count;
  return (
    <Item>
      <Property>{name} :</Property>
      <Property>{price}$</Property>

      <Counter
        value={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />

      <Amount>{amount}$</Amount>
      <Button variant="closeButton">x</Button>
    </Item>
  );
};

CartListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
