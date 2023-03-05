import { HeaderContainer } from '../organisms/common/headerContainer';
import { Main } from './main';

export const MainWithHeader = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
    </>
  );
};