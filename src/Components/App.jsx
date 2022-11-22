import { Box } from './Common/Box.styled';
import { Cart } from './Cart/Cart';
import initialState from 'data/initialState.json';

export function App() {
  return (
    <Box>
      <Cart initialState={initialState} />
    </Box>
  );
}
