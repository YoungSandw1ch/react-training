import { Box } from '../Common/Box.styled';
import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import { ColorPicker } from './ColorPicker';
import { colorPickerOptions } from './ColorPicker/options';

export function App() {
  return (
    <Box p={5} mx="auto" width="container" display="flex" gridColumnGap={3}>
      <Counter initialValue={0} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </Box>
  );
}
