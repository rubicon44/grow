import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../auth/AuthContextProvider";
import { MainWithHeaderForAuth } from "./MainWithHeaderForAuth";

export const MainWithHeaderForAuthContainer = ({ children, top }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <MainWithHeaderForAuth currentUserAuth={currentUserAuth} top={top}>
      {children}
    </MainWithHeaderForAuth>
  );
};

MainWithHeaderForAuthContainer.defaultProps = {
  top: "",
};

MainWithHeaderForAuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.string,
};
