import { Route, Routes } from 'react-router-dom';
import { Cart } from '../modules/cart';
import { Home } from '../modules/home';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
