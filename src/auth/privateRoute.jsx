import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import { SignIn } from '../components/containers/pages/static_pages/signIn';

export function PrivateRoute({ element: RouteComponent }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? RouteComponent : <SignIn />;
}
