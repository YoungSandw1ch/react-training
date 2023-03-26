import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
