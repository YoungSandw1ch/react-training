import { Outlet } from 'react-router-dom';
import { Box } from 'Components/Common';
import { Navigation, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Box p={3} mx="auto" width="container">
          <Navigation>
            <StyledLink to="/">Homepage</StyledLink>
            <StyledLink to="/cart">Cart</StyledLink>
            <StyledLink to="/counter">Counter</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </Navigation>
        </Box>
      </header>
      <main>
        <Box p={5} mx="auto" width="container">
          <Outlet />
        </Box>
      </main>
    </>
  );
};

export default Layout;
