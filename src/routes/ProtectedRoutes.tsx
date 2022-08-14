import { Route, Routes } from 'react-router-dom';
import { Cart } from '../modules/cart';
import { Home } from '../modules/home';
import { ProductInfo } from '../modules/ProductInfo';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path=":id" element={<ProductInfo />} />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
