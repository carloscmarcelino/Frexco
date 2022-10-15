import { Route, Routes } from 'react-router-dom';
import { Home } from '../modules/home';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
