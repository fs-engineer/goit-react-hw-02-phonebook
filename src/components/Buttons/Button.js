import React, { Component } from 'react';
import { StyledBtn } from './Button.styled';

class Button extends Component {
  render() {
    const { text, type, onClick, id } = this.props;

    return (
      <StyledBtn type={type} onClick={onClick} data-id={id}>
        {text}
      </StyledBtn>
    );
  }
}

export default Button;
