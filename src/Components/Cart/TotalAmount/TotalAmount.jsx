import { Box } from 'Components/Common';

export const TotalAmount = ({ items }) => {
  const amount = items.reduce((acc, item) => acc + item.price * item.count, 0);

  return <Box as="p">Total: {amount}$</Box>;
};
