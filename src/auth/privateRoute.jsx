import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './authProvider';
import { SignInWithRouter } from '../components/containers/pages/static_pages/sign_in';

export const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : SignInWithRouter;

  return <Route {...options} component={Component} />;
};