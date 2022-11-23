import { Box, Button } from 'Components/Common/';
import { Label, Name, Input } from './CartForm.styled';

export const CartForm = () => {
  return (
    <Box
      display="flex"
      flexDirections="column"
      gridColumnGap={3}
      justifyContent="center"
      alignItems="center"
      mb={4}
    >
      <Label>
        <Name>name</Name>
        <Input type="text" />
      </Label>
      <Label>
        <Name>price</Name>
        <Input type="number" />
      </Label>
      <Button type="button" variant="addButton">
        add
      </Button>
    </Box>
  );
};
