import styled from 'styled-components';
import { variant } from 'styled-system';
import {
  space,
  color,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

export const Button = styled.button(
  {
    margin: 0,
    padding: 0,
    border: 'none',
    borderRadius: '4px',
    height: '25px',
    backgroundColor: 'palevioletred',
    color: 'white',
  },
  space,
  color,
  layout,
  flexbox,
  grid,
  typography,
  background,
  border,
  position,
  shadow,

  variant({
    variants: {
      addButton: {
        width: 'half',
      },
      countButton: {
        width: 'button',
      },
      closeButton: {
        borderRadius: 'round',
        width: 'button',
        height: 'button',
      },
    },
  })
);
