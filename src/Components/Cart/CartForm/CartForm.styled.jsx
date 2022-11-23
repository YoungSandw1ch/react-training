import styled from 'styled-components';

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
  height: ${({ theme }) => theme.fontSizes.xm};
`;
