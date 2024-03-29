import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { Main } from "./Main";
import { LogOutConfirmation } from "../organisms/common/LogOutConfirmation";
import { HeaderContainer } from "../organisms/common/HeaderContainer";
import { SpButtonToTaskCreate } from "../organisms/common/SpButtonToTaskCreate";

export const MainWithHeader = ({
  children,
  currentUserAuth,
  width,
  handleLogout,
  handleShowLogoutConfirmation,
  showLogoutConfirmation,
  revertLogOutConfirmation,
}) => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      <HeaderContainer
        currentUserAuth={currentUserAuth}
        handleShowLogoutConfirmation={handleShowLogoutConfirmation}
      />
      {currentUserAuth && isMobile && <SpButtonToTaskCreate />}
      <Main width={width}>
        <LogOutConfirmation
          handleLogout={handleLogout}
          revertLogOutConfirmation={revertLogOutConfirmation}
          showLogoutConfirmation={showLogoutConfirmation}
        />
        {children}
      </Main>
    </>
  );
};

MainWithHeader.defaultProps = {
  width: "",
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleShowLogoutConfirmation: PropTypes.func.isRequired,
  revertLogOutConfirmation: PropTypes.func.isRequired,
  showLogoutConfirmation: PropTypes.bool.isRequired,
  width: PropTypes.string,
};
