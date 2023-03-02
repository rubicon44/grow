import { HeaderContainer } from '../organisms/Common/HeaderContainer';
import { Main } from './Main';

export const MainWithHeader = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
    </>
  );
};