import { Box } from 'Components/Common/';
import { Label, Name, Input, Button } from './CartForm.styled';

export const CartForm = () => {
  return (
    <Box>
      <Label>
        <Name>name</Name>
        <Input type="text" />
      </Label>
      <Label>
        <Name>price</Name>
        <Input type="number" />
      </Label>
      <Button>+add</Button>
    </Box>
  );
};
