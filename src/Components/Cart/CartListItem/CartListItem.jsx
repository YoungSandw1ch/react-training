import { Item, Property, Count, Amount } from './CartListItem.styled';
import { Box } from 'Components/Common';
import { Button } from 'Components/Common';

export const CartListItem = ({ name, count, price }) => {
  const amount = price * count;
  return (
    <Item>
      <Property>{name}</Property>
      <Property>{price}$</Property>

      <Box>
        <Button>-</Button>
        <Count>{count}</Count>
        <Button>+</Button>
      </Box>

      <Amount>{amount}$</Amount>
      <Button>x</Button>
    </Item>
  );
};
