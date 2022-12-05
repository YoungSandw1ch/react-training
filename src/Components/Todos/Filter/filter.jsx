import PropTypes from 'prop-types';
import {
  Input,
  Label,
  FilterCheckbox,
  CheckboxsWrapper,
} from './Filter.styled';
import { Box } from 'Components/Common';

export const Filter = ({ onChange, filter }) => {
  const { text, fulfilled, notFulfilled } = filter;
  return (
    <Box
      mb={4}
      backgroundColor="#e4ab7e"
      border="normal"
      borderRadius="normal"
      py={2}
      px={3}
    >
      <Label>
        Фильтрация заметок
        <Input type="text" name="text" value={text} onChange={onChange} />
      </Label>
      <Box display="flex" gridGap="10px">
        <CheckboxsWrapper>
          выполнено
          <FilterCheckbox
            type="checkbox"
            name="fulfilled"
            checked={fulfilled}
            onChange={onChange}
          />
        </CheckboxsWrapper>
        <CheckboxsWrapper>
          не выполнено
          <FilterCheckbox
            type="checkbox"
            name="notFulfilled"
            checked={notFulfilled}
            onChange={onChange}
          />
        </CheckboxsWrapper>
      </Box>
    </Box>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.exact({
    text: PropTypes.string.isRequired,
    fulfilled: PropTypes.bool.isRequired,
    notFulfilled: PropTypes.bool.isRequired,
  }),
};
