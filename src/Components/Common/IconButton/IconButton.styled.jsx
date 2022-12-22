import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  /* border-radius: ${({ theme }) => theme.radii.normal}; */
  /* background-color: ${({ theme }) => theme.colors.darkRed}; */
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkRed};
  font: inherit;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  transition: all 250ms linear;

  /* width: 60px;
  height: 40px; */

  :hover,
  :focus {
    transform: scale(1.08);
    /* color: ${({ theme }) => theme.colors.white}; */
  }
`;
