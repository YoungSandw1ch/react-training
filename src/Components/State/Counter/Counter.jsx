import styles from './counter.module.css';
import { useState } from 'react';
import { Box } from 'Components/Common';
import { CounterControls } from './CounterControls';
import { CounterBody } from './CounterBody';
import { CounterContext } from './context';

// const initialState = {
//   value: 0,
//   step: 1,
// };

// const

// const reducer = (state, actions) => {
//   switch (actions.type) {
//     case 'eee':
//       return 'eee';
//     default:
//       return state;
//   }
// };

// console.log(reducer);

export const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [step, setStep] = useState(1);

  const onIncrement = () => setValue(value => value + step);
  const onDecrement = () => setValue(value => value - step);
  const onStepChange = e => setStep(Number(e.target.value));

  return (
    <CounterContext.Provider
      value={{ value, step, onDecrement, onIncrement, onStepChange }}
    >
      <Box className={styles.counter}>
        <CounterBody />
        <CounterControls />
      </Box>
    </CounterContext.Provider>
  );
};
