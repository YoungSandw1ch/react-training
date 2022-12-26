import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  text-align: center;
`;

export const Text = styled.p`
  text-indent: 40px;
  line-height: 1.5;
`;
