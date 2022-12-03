import { Field } from 'formik';
import styled from 'styled-components';

export const TextArea = styled(Field)`
  width: 100%;
  height: 50px;
  resize: none;
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  row-gap: 10px;

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.fistFontColor};
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;

  margin-bottom: ${({ theme }) => theme.space[3]}px;

  font-size: ${({ theme }) => theme.fontSizes.ms};
  letter-spacing: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;

  border: ${({ theme }) => theme.borders.medium};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.darkRed};
  color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.normal};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.darkRed};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.darkRed};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.shadows.buttonActive};
  }
`;
