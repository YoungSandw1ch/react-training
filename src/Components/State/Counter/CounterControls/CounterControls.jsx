import React from 'react';
import styles from './counterControl.module.css';

export const CounterControls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter__controls}>
      <button type="button" onClick={onIncrement}>
        Увеличить
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить
      </button>
    </div>
  );
};
