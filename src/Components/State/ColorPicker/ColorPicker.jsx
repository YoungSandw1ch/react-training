import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Colorpicker.module.css';

export class ColorPicker extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeClassName = index => {
    const { activeOptionIndex } = this.state;
    return `${styles.ColorPicker__option} ${
      activeOptionIndex === index ? styles.active : ''
    }`;
  };

  render() {
    const { options } = this.props;
    const { activeOptionIndex } = this.state;
    const { label, color } = options[activeOptionIndex];
    const { setActiveIndex, makeClassName } = this;

    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>Color Picker</h2>
        <p>
          Выбран цвет:
          <span style={{ color: color }}>{label}</span>
        </p>
        <div>
          {options.map(({ label, color }, i) => (
            <button
              onClick={() => setActiveIndex(i)}
              type="button"
              key={label}
              className={makeClassName(i)}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
