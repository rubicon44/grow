import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../auth/AuthContextProvider";
import { useLogOutConfirmation } from "../../../hooks/useLogOutConfirmation";
import { MainWithHeader } from "./MainWithHeader";

export const MainWithHeaderContainer = ({ children, width }) => {
  const { currentUserAuth } = useContext(AuthContext);
  const {
    handleLogout,
    handleShowLogoutConfirmation,
    showLogoutConfirmation,
    revertLogOutConfirmation,
  } = useLogOutConfirmation();
  return (
    <MainWithHeader
      currentUserAuth={currentUserAuth}
      width={width}
      handleLogout={handleLogout}
      handleShowLogoutConfirmation={handleShowLogoutConfirmation}
      showLogoutConfirmation={showLogoutConfirmation}
      revertLogOutConfirmation={revertLogOutConfirmation}
    >
      {children}
    </MainWithHeader>
  );
};

MainWithHeaderContainer.defaultProps = {
  width: "",
};

MainWithHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
