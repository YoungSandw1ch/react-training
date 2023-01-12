import styled from 'styled-components';
import { Item } from '../MaterialsList/MaterialsList.styled';

export const SkeletonItem = styled(Item)`
  width: 500px;
  justify-content: space-between;
`;

export const SkeletonTextBox = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 8px;
  /* align-items: center; */
  justify-content: center;

  width: 80%;
`;

export const SkeletonButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 10%;
`;
