import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 15px;
  padding: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.sizes.ms};
  font-weight: 600;
  color: #0066f8;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;
