import { HeaderContainer } from 'components/containers/organisms/common/Header/HeaderContainer';
import { Main } from 'components/containers/templates/Main';

export const MainWithHeader = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
    </>
  );
};