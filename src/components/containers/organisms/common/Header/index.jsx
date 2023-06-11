import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { NotLoggedInHeader } from "./NotLoggedInHeader";
import { NotLoggedInNavigation } from "./NotLoggedInNavigation";
import { PcHeader } from "./PcHeader";
import { SpHeader } from "./SpHeader";
import { SpNavigation } from "./SpNavigation";

export const Header = ({
  clickedText,
  currentUserAuth,
  currentUserName,
  handleShowLogoutConfirmation,
  headerLinksForAuth,
  setClickedText,
  pcHeaderLinks,
  spNavigationLinks,
}) => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      {!currentUserAuth && (
        <>
          <NotLoggedInHeader />
          <NotLoggedInNavigation
            clickedText={clickedText}
            headerLinksForAuth={headerLinksForAuth}
            setClickedText={setClickedText}
          />
        </>
      )}

      {currentUserAuth &&
        (isMobile ? (
          <>
            <SpHeader
              currentUserName={currentUserName}
              handleShowLogoutConfirmation={handleShowLogoutConfirmation}
              setClickedText={setClickedText}
            />
            <SpNavigation
              clickedText={clickedText}
              setClickedText={setClickedText}
              spNavigationLinks={spNavigationLinks}
            />
          </>
        ) : (
          <PcHeader
            clickedText={clickedText}
            handleShowLogoutConfirmation={handleShowLogoutConfirmation}
            setClickedText={setClickedText}
            pcHeaderLinks={pcHeaderLinks}
          />
        ))}
    </>
  );
};

Header.defaultProps = {
  clickedText: null,
  currentUserName: "",
  handleShowLogoutConfirmation: () => {},
};

Header.propTypes = {
  clickedText: PropTypes.string,
  currentUserName: PropTypes.string,
  handleShowLogoutConfirmation: PropTypes.func,
  headerLinksForAuth: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setClickedText: PropTypes.func.isRequired,
  pcHeaderLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  spNavigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clickedText: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
