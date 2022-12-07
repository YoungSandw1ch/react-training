import { Box } from 'Components/Common';

export const TotalAmount = ({ items }) => {
  const amount = items.reduce(
    (acc, { guarantee, price, count }) =>
      acc + (guarantee ? price * 0.01 + price : price) * count,
    0
  );

  return (
    <Box as="p" fontSize="xm" pl={5} color="black" textAlign="end">
      Total amount: {amount}$
    </Box>
  );
};
