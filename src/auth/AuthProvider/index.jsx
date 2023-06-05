import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const { currentUserAuth, signin, signup, signout } = useFirebaseAuth();

  const authValue = useMemo(
    () => ({ currentUserAuth, signin, signup, signout }),
    [currentUserAuth, signin, signup, signout]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
