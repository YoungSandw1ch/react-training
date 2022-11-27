import React, { Component } from 'react';
import styles from './counter.module.css';
import { CounterControls } from './CounterControls';

export class Counter extends Component {
  render() {
    return (
      <div className={styles.counter}>
        <span className={styles.counter__value}>0</span>

        <CounterControls />
      </div>
    );
  }
}
