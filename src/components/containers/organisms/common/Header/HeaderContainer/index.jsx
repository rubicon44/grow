import { useHeader } from 'hooks/useHeader';
import { Header } from 'components/containers/organisms/common/Header';

export const HeaderContainer = () => {
  const { headerLinks, headerLinksForAuth, state, toggleDrawer } = useHeader();
  return <Header headerLinks={headerLinks} headerLinksForAuth={headerLinksForAuth} state={state} toggleDrawer={toggleDrawer} />;
};