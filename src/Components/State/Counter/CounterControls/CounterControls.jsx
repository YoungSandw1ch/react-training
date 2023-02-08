import styles from './counterControl.module.css';
import { Box } from 'Components/Common';
import { useCounterContext } from '../utils/context';
import { increment, decrement, setStep } from '../utils/actions/actions';

export const CounterControls = () => {
  const { state, dispatch } = useCounterContext();
  const { step } = state;
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onStepChange = e => dispatch(setStep(Number(e.target.value)));

  return (
    <Box className={styles.counter__controls}>
      <button type="button" onClick={onDecrement}>
        Уменьшить
      </button>

      <select value={step} onChange={onStepChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>

      <button type="button" onClick={onIncrement}>
        Увеличить
      </button>
    </Box>
  );
};
