import styles from './counter.module.css';
import { useState } from 'react';
import { Box } from 'Components/Common';
import { CounterControls } from './CounterControls';
import { CounterBody } from './CounterBody';

export const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [step, setStep] = useState(1);

  const onIncrement = () => {
    setValue(value => value + step);
  };

  const onDecrement = () => {
    setValue(value => value - step);
  };

  const onStepChange = e => {
    setStep(Number(e.target.value));
  };

  return (
    <Box className={styles.counter}>
      <CounterBody value={value} />
      <CounterControls
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onStepChange={onStepChange}
      />
    </Box>
  );
};
