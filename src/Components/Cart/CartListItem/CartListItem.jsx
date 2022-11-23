import { Item, Property, Count, Amount } from './CartListItem.styled';
import { Box } from 'Components/Common';
import { Button } from 'Components/Common';

export const CartListItem = ({ name, count, price }) => {
  const amount = price * count;
  return (
    <Item>
      <Property>{name} :</Property>
      <Property>{price}$</Property>

      <Box display="flex" gridColumnGap={3} alignItems="center">
        <Button variant="countButton">-</Button>
        <Count>{count}</Count>
        <Button variant="countButton">+</Button>
      </Box>

      <Amount>{amount}$</Amount>
      <Button variant="closeButton">x</Button>
    </Item>
  );
};
