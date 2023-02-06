import { Box } from 'Components/Common';
import styles from './counterControl.module.css';

export const CounterControls = ({ onIncrement, onDecrement, onStepChange }) => {
  return (
    <Box className={styles.counter__controls}>
      <button type="button" onClick={onDecrement}>
        Уменьшить
      </button>

      <select name="select" onChange={onStepChange}>
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
