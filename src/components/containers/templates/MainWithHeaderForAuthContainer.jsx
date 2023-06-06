import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../auth/AuthContextProvider";
import { MainWithHeaderForAuth } from "./MainWithHeaderForAuth";

export const MainWithHeaderForAuthContainer = ({ children }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <MainWithHeaderForAuth currentUserAuth={currentUserAuth}>
      {children}
    </MainWithHeaderForAuth>
  );
};

MainWithHeaderForAuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
