import React, { Component } from 'react';
import styles from './counter.module.css';
import PropTypes from 'prop-types';
import { CounterControls } from './CounterControls';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  onIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  onDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.counter}>
        <span className={styles.counter__value}>{value}</span>

        <CounterControls
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
      </div>
    );
  }
}
