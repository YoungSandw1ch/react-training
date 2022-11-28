import { Box } from './Common/Box.styled';
import { Cart } from './Cart/Cart';
import initialState from 'data/initialState.json';

export function App() {
  return (
    <Box p={5} mx="auto" width="container">
      <Cart initialState={initialState} />
    </Box>
  );
}
