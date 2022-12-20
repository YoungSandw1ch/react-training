import React, { Component } from 'react';
import { Backdrop, Wrapper } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <Backdrop>
        <Wrapper>{this.props.children}</Wrapper>
      </Backdrop>
    );
  }
}
