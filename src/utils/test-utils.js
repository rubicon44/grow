import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AuthProvider } from '../auth/authProvider';

const AllTheProviders = ({children}) => {
  return (
    <AuthProvider>
      <Router>
        {children}
      </Router>
    </AuthProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react';
export { customRender as render };