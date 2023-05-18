import PropTypes from "prop-types";
import { HeaderContainer } from "../organisms/common/HeaderContainer";
import { Main } from "./main";

export const MainWithHeader = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Main>{children}</Main>
    </>
  );
};

MainWithHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
