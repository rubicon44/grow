import { HeaderContainer } from '../organisms/common/HeaderContainer';
import { Main } from './main';

// test
export const MainWithHeader = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
    </>
  );
};