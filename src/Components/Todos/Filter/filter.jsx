import { Input, Label } from './Filter.styled';
import { Box } from 'Components/Common';

export const Filter = ({ onChange, filter }) => {
  const { text, fulfilled, notFulfilled } = filter;
  return (
    <Box mb={4}>
      <Label>
        Фильтрация заметок
        <Input type="text" name="text" value={text} onChange={onChange} />
      </Label>
      <label>
        {/* {done} */}
        выполнено
        <input
          type="checkbox"
          name="fulfilled"
          checked={fulfilled}
          onChange={onChange}
        />
      </label>
      <label>
        не выполнено
        <input
          type="checkbox"
          name="notFulfilled"
          checked={notFulfilled}
          onChange={onChange}
        />
      </label>
    </Box>
  );
};
