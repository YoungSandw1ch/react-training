import styled from 'styled-components';
import { Button } from 'Components/Common';

export const Label = styled.label`
  display: flex;
  align-items: center;
`;
export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xm};
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.space[3]}px;
`;
export const Input = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
  height: ${({ theme }) => theme.sizes.button};
`;

export const Checkbox = styled.input`
  accent-color: ${({ theme }) => theme.colors.violet};
  width: 25px;
  height: 25px;
`;

export const ButtonAdd = styled(Button)`
  &:hover,
  &:focus {
    background-color: violet;
  }
`;
