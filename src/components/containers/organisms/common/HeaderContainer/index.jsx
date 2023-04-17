import { useHeader } from '../../../../../hooks/useHeader';
import { Header } from '../Header';

export const HeaderContainer = () => {
  const { headerLinks, headerLinksForAuth, drawerStatus, toggleDrawer } = useHeader();
  return <Header headerLinks={headerLinks} headerLinksForAuth={headerLinksForAuth} drawerStatus={drawerStatus} toggleDrawer={toggleDrawer} />;
};