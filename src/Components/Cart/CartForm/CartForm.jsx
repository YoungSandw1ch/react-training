import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'Components/Common/';
import { Label, Name, Input, Checkbox, ButtonAdd } from './CartForm.styled';
import { nanoid } from 'nanoid';

export const CartForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [guarantee, setGuarantee] = useState(false);

  const handleNameChange = e => setName(e.target.value);
  const handlePriceChange = e => setPrice(Number(e.target.value));
  const handleGuaranteeChange = e => setGuarantee(e.target.checked);
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !price) return;
    const id = nanoid();
    onSubmit({ id, name, price, count: 1, guarantee });
    setName('');
    setPrice('');
    setGuarantee(false);
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirections="column"
      gridColumnGap={3}
      justifyContent="center"
      alignItems="center"
      mb={4}
      onSubmit={handleSubmit}
    >
      <Label>
        <Name>name</Name>
        <Input type="text" value={name} onChange={handleNameChange} />
      </Label>
      <Label>
        <Name>price</Name>
        <Input type="number" value={price} onChange={handlePriceChange} />
      </Label>

      <Label>
        <Name>+g</Name>
        <Checkbox
          type="checkbox"
          checked={guarantee}
          onChange={handleGuaranteeChange}
        />
      </Label>

      <ButtonAdd type="submit" variant="addButton">
        add
      </ButtonAdd>
    </Box>
  );
};

CartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
