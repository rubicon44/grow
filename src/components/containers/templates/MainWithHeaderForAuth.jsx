import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { MainForAuth } from "./MainForAuth";
import { SpButtonToTaskCreate } from "../organisms/common/SpButtonToTaskCreate";
import { HeaderContainer } from "../organisms/common/HeaderContainer";

export const MainWithHeaderForAuth = ({ children, currentUserAuth }) => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      <HeaderContainer currentUserAuth={currentUserAuth} />
      {currentUserAuth && isMobile && <SpButtonToTaskCreate />}
      <MainForAuth>{children}</MainForAuth>
    </>
  );
};

MainWithHeaderForAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
