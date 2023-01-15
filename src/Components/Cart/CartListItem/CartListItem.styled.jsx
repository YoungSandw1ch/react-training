import styled from 'styled-components';
import { IconButton } from 'Components/Common/IconButton';

export const CloseBtn = styled(IconButton)`
  padding: 0;
  color: palevioletred;
  & svg {
    width: 25px;
    height: 25px;
  }
`;

export const Item = styled.li`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};

  height: ${({ theme }) => theme.sizes.item};
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }
`;

export const Property = styled.span`
  flex-basis: calc((100% - 4 * 5px) / 5);
`;

export const Amount = styled.span`
  flex-basis: calc((100% - 4 * 5px) / 5);
  font-size: ${({ theme }) => theme.fontSizes.xm};
`;
