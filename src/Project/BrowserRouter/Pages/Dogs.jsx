import { Link } from 'react-router-dom';

const Dogs = () => {
  //useEffect fetch
  const dogs = ['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'];

  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog}>
          <Link to={`${dog}`}>{dog}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dogs;
