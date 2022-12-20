import React, { Component } from 'react';
import { Backdrop, Wrapper } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return createPortal(
      <Backdrop>
        <Wrapper>{this.props.children}</Wrapper>
      </Backdrop>,
      modalRoot
    );
  }
}
