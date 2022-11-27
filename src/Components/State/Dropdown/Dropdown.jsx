import React, { Component } from 'react';
import styles from './dropdown.module.css';

export class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { toggleMenu } = this;
    const { isOpen } = this.state;
    return (
      <div className={styles.Dropdown}>
        <button type="button" onClick={toggleMenu}>
          {isOpen ? 'Свернуть' : 'Развернуть'}
        </button>

        {isOpen && <div className={styles.Dropdown__menu}>Выпадающее меню</div>}
      </div>
    );
  }
}
