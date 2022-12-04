import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  text-align: center;

  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};

  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};

  background-color: #e4ab7e;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: ${({ theme }) => theme.space[3]}px;

  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
