import { Routes, Route } from 'react-router-dom';
import Layout from './Cart/Layout/Layout';
import Homepage from 'Project/Cart/Pages/HomePage';
import About from 'Project/Cart/Pages/About';
import CartPage from 'Project/Cart/Pages/Cart';
import CounterPage from 'Project/Cart/Pages/CounterPage';
import NotFound from 'Project/Cart/Pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
