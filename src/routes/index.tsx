import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
  const user = true;

  return user ? <ProtectedRoutes /> : <PublicRoutes />;
};
