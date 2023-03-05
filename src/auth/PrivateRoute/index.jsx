import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { SignIn } from '../../components/containers/pages/auth/signIn';

export const PrivateRoute = ({ element: RouteComponent }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return currentUserAuth ? RouteComponent : <SignIn />;
};