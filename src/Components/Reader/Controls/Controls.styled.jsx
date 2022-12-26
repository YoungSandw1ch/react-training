import styled from 'styled-components';
import { Button } from 'Components/Common';

export const ControlButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 40px;
  background-color: brown;
  color: white;

  :disabled {
    background-color: grey;
    color: #2a2a2a;
  }

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.space[4]}px;
  }
`;
