import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { Main } from "./main";
import { SpButtonToTaskCreate } from "../organisms/common/SpButtonToTaskCreate";
import { HeaderContainer } from "../organisms/common/HeaderContainer";

export const MainWithHeader = ({ children, currentUserAuth, width }) => {
  const isMobile = useMediaQuery("(max-width:375px)");
  return (
    <>
      <HeaderContainer currentUserAuth={currentUserAuth} />
      {currentUserAuth && isMobile && <SpButtonToTaskCreate />}
      <Main width={width}>{children}</Main>
    </>
  );
};

MainWithHeader.defaultProps = {
  width: "",
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
