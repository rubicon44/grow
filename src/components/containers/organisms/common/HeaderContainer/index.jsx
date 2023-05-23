import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../../auth/AuthProvider";
import { useHeader } from "../../../../../hooks/useHeader";
import { Header } from "../Header";

export const HeaderContainer = ({ title }) => {
  const { headerLinks, headerLinksForAuth, drawerStatus, toggleDrawer } =
    useHeader();
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <Header
      currentUserAuth={currentUserAuth}
      drawerStatus={drawerStatus}
      headerLinks={headerLinks}
      headerLinksForAuth={headerLinksForAuth}
      title={title}
      toggleDrawer={toggleDrawer}
    />
  );
};

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
};
