import React, { Component } from 'react';
import styles from './counterControl.module.css';

export class CounterControls extends Component {
  render() {
    return (
      <div className={styles.counter__controls}>
        <button type="button">Увеличить</button>
        <button type="button">Уменьшить</button>
      </div>
    );
  }
}
