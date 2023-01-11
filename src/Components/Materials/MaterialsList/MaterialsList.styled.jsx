import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  width: ${({ theme }) => theme.sizes.five};
  margin-top: ${({ theme }) => theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 80px;

  padding: ${({ theme }) => theme.space[3]}px;

  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radii.normal};

  background-color: ${({ theme }) => theme.colors.white};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;
