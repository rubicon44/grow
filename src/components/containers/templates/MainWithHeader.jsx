import React from 'react';
import { Header } from 'components/containers/organisms/Header';
import { Main } from 'components/containers/templates/Main';

export const MainWithHeader = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
    </React.Fragment>
  );
};