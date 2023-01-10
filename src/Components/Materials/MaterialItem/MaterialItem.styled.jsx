import styled from 'styled-components';

export const TitleText = styled.p`
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const LinkText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
