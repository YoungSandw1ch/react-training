import styled from 'styled-components';

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
