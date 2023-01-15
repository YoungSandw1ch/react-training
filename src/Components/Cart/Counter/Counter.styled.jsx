import styled from 'styled-components';
import { Button } from 'Components/Common';

export const CounterBtn = styled(Button)`
  &:disabled {
    background-color: grey;
  }
`;
