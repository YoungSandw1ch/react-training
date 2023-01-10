import styled from 'styled-components';

export const TitleText = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const LinkText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
