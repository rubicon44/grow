import { Fragment } from 'react';
import { Header } from 'components/containers/organisms/Header';
import { Main } from 'components/containers/templates/Main';

export const MainWithHeader = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
    </Fragment>
  );
};