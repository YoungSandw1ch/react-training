import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Input = styled.input`
  margin-right: ${({ theme }) => theme.space[3]}px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]}px;
`;
