import styles from './counterBody.module.css';

export const CounterBody = ({ value }) => {
  return <span className={styles.counter__value}>{value}</span>;
};
