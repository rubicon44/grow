import PropTypes from "prop-types";
import { useCurrentUserName } from "../../../../../hooks/useCurrentUserName";
import { useHeader } from "../../../../../hooks/useHeader";
import { useHeaderContext } from "../../../../../context/HeaderContextProvider";
import { Header } from "../Header";

export const HeaderContainer = ({
  currentUserAuth,
  handleShowLogoutConfirmation,
}) => {
  const { headerLinksForAuth, pcHeaderLinks, spNavigationLinks } = useHeader();
  const currentUserName = useCurrentUserName();
  const { clickedText, setClickedText } = useHeaderContext();
  return (
    <Header
      clickedText={clickedText}
      currentUserAuth={currentUserAuth}
      currentUserName={currentUserName}
      handleShowLogoutConfirmation={handleShowLogoutConfirmation}
      headerLinksForAuth={headerLinksForAuth}
      setClickedText={setClickedText}
      pcHeaderLinks={pcHeaderLinks}
      spNavigationLinks={spNavigationLinks}
    />
  );
};

HeaderContainer.defaultProps = {
  handleShowLogoutConfirmation: () => {},
};

HeaderContainer.propTypes = {
  handleShowLogoutConfirmation: PropTypes.func,
};
