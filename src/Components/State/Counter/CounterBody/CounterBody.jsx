import styles from './counterBody.module.css';
import { useCounterContext } from '../utils/context';

export const CounterBody = () => {
  const { state } = useCounterContext();
  const { value } = state;
  return <span className={styles.counter__value}>{value}</span>;
};
