import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #e4ab7e;
  border: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.normal};
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: ${({ theme }) => theme.space[3]}px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const FilterCheckbox = styled.input`
  border-radius: ${({ theme }) => theme.radii.round};
  width: 20px;
  height: 20px;

  accent-color: rgb(187, 53, 53);
`;

export const CheckboxsWrapper = styled.label`
  /* border: ${({ theme }) => theme.borders.normal}; */
  border-radius: ${({ theme }) => theme.radii.normal};
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
`;
