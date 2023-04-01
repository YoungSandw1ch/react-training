import { Route, Routes } from 'react-router-dom';
import Homepage from 'Project/BrowserRouter/Pages/Home';
import Contacts from 'Project/BrowserRouter/Pages/Contacts';
import NotFound from 'Project/BrowserRouter/Pages/NotFound';
import Dogs from 'Project/BrowserRouter/Pages/Dogs';
import DogsDetails from 'Project/BrowserRouter/Pages/DogDetails';
import { Subbreads } from './Subbreads/Subbreads';
import { Gallery } from './Gallery/Gallery';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogsDetails />}>
          <Route path="subbreads" element={<Subbreads />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
