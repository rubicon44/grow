import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../auth/AuthContextProvider";
import { MainWithHeader } from "./MainWithHeader";

export const MainWithHeaderContainer = ({ children }) => {
  const { currentUserAuth } = useContext(AuthContext);
  return (
    <MainWithHeader currentUserAuth={currentUserAuth}>
      {children}
    </MainWithHeader>
  );
};

MainWithHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
