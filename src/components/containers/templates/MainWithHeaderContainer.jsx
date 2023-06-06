import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../auth/AuthContextProvider";
import { MainWithHeader } from "./MainWithHeader";

export const MainWithHeaderContainer = ({ children, width }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <MainWithHeader currentUserAuth={currentUserAuth} width={width}>
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
