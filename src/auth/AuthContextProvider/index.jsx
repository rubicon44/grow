import { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const {
    currentUserAuth,
    signinWithEmailAndPassword,
    signinWithGitHub,
    signinWithGoogle,
    signupWithEmailAndPassword,
    signout,
  } = useFirebaseAuth();

  const authValue = useMemo(
    () => ({
      currentUserAuth,
      signinWithEmailAndPassword,
      signinWithGitHub,
      signinWithGoogle,
      signupWithEmailAndPassword,
      signout,
    }),
    [
      currentUserAuth,
      signinWithEmailAndPassword,
      signinWithGitHub,
      signinWithGoogle,
      signupWithEmailAndPassword,
      signout,
    ]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
