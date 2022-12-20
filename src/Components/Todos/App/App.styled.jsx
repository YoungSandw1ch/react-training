import styled from 'styled-components';
import { Button } from 'Components/Common';

export const Header = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const Logo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.ms};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 3px;

  color: ${({ theme }) => theme.colors.darkRed};
  margin-top: ${({ theme }) => theme.space[3]}px;

  flex-grow: 1;
`;

export const AddButton = styled.button``;

export const FilterButton = styled.button``;

export const CloseButton = styled(Button)`
  width: 25px;
  height: 25px;
  display: block;

  font-size: 12px;
  border: 1px solid transparent;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(187, 53, 53);

  transition: box-shadow 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    color: rgb(187, 53, 53);
    background-color: #fff;
    border-color: rgb(187, 53, 53);
  }

  :active {
    box-shadow: 2px 2px 4px black;
  }
`;
