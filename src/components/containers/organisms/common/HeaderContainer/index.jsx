import { useHeader } from '../../../../../hooks/useHeader';
import { Header } from '../header';

export const HeaderContainer = () => {
  const { headerLinks, headerLinksForAuth, state, toggleDrawer } = useHeader();
  return <Header headerLinks={headerLinks} headerLinksForAuth={headerLinksForAuth} state={state} toggleDrawer={toggleDrawer} />;
};