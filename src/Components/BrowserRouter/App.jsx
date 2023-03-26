import { NavLink, Route, Routes } from 'react-router-dom';
import { Box } from 'Components/Common';
import Homepage from 'Project/BrowserRouter/Pages/Home';
import Contacts from 'Project/BrowserRouter/Pages/Contacts';
import Dogs from 'Project/BrowserRouter/Pages/Dogs';
import DogsDetails from 'Project/BrowserRouter/Pages/DogDetails';
import { Subbreads } from './Subbreads/Subbreads';
import { Gallery } from './Gallery/Gallery';

export const App = () => {
  return (
    <Box>
      <header>
        <nav>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/dogs">Dogs</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogsDetails />}>
          <Route path="subbreads" element={<Subbreads />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Box>
  );
};
