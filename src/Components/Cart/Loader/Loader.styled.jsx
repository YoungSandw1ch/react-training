import styled from 'styled-components';

export const LoaderText = styled.p`
  position: absolute;
  left: 50%;
  top: 47px;
  transform: translateX(-50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  /* margin-bottom: ${({ theme }) => theme.space[4]}px; */
`;
