import { Box } from 'Components/Common';

export const TotalAmount = ({ items }) => {
  const amount = items.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <Box as="p" fontSize="xm" pl={5} color="white">
      Total amount: {amount}$
    </Box>
  );
};
