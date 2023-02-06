import styles from './counterBody.module.css';
import { useCounterContext } from '../context';

export const CounterBody = () => {
  const { value } = useCounterContext();
  return <span className={styles.counter__value}>{value}</span>;
};
