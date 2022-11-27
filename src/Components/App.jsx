import { Box } from './Common/Box.styled';
//----Cart--------------------------------------------
// import { Cart } from './Cart/Cart';
// import initialState from 'data/initialState.json';
//----Todos-------------------------------------------
//----TrainingComponents------------------------------
import { Counter } from './State/Counter';

export function App() {
  return (
    <Box p={5} mx="auto" width="container">
      {/* <Cart initialState={initialState} /> */}
      <Counter />
    </Box>
  );
}
