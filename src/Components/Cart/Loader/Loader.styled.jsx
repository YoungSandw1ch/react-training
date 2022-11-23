import styled from 'styled-components';

export const LoaderText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;
