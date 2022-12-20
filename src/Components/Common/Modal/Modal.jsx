import React, { Component } from 'react';
import { Backdrop, Wrapper } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log('code: ', e.code);

    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop>
        <Wrapper>{this.props.children}</Wrapper>
      </Backdrop>,
      modalRoot
    );
  }
}
