import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { MainForTop } from "./MainForTop";
import { MainForAuth } from "./MainForAuth";
import { SpButtonToTaskCreate } from "../organisms/common/SpButtonToTaskCreate";
import { HeaderContainer } from "../organisms/common/HeaderContainer";

export const MainWithHeaderForAuth = ({ children, currentUserAuth, top }) => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      <HeaderContainer currentUserAuth={currentUserAuth} />
      {currentUserAuth && isMobile && <SpButtonToTaskCreate />}
      {top ? (
        <MainForTop>{children}</MainForTop>
      ) : (
        <MainForAuth>{children}</MainForAuth>
      )}
    </>
  );
};

MainWithHeaderForAuth.defaultProps = {
  top: "",
};

MainWithHeaderForAuth.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.string,
};
