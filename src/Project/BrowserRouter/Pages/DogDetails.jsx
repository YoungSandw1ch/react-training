import { Link, Outlet, useParams } from 'react-router-dom';

const DogsDetails = () => {
  const { dogId } = useParams();

  return (
    <>
      <h1>Dogs details about: {dogId}</h1>

      <ul>
        <li>
          <Link to="subbreads">Dog subbreads</Link>
        </li>
        <li>
          <Link to="gallery">Dog gallery</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default DogsDetails;
