import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>This page not found</h1>
      <NavLink to="/">Homepage</NavLink>
    </>
  );
};

export default NotFound;
