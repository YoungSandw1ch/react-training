import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <Label>
      Фильтрация заметок
      <Input type="text" name="text" value={value} onChange={onChange} />
    </Label>
  );
};
