import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import { SignIn } from '../components/containers/pages/staticPages/signIn';

export const PrivateRoute = ({ element: RouteComponent }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return currentUserAuth ? RouteComponent : <SignIn />;
}