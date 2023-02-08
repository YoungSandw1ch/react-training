import styles from './counter.module.css';
import { useReducer } from 'react';
import { Box } from 'Components/Common';
import { CounterControls } from './CounterControls';
import { CounterBody } from './CounterBody';
import { CounterContext } from './utils/context';
import { reducer } from './utils';

export const initialState = {
  value: 0,
  step: 1,
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Box className={styles.counter}>
        <CounterBody />
        <CounterControls />
      </Box>
    </CounterContext.Provider>
  );
};
