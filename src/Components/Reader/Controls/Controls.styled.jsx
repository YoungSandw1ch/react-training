import styled from 'styled-components';
import { Button } from 'Components/Common';

export const ControlButton = styled(Button)`
  background-color: blue;
  color: white;

  :disabled {
    background-color: grey;
    color: #2a2a2a;
  }
`;
