import { useContext } from "react";
import { AuthContext } from "../../../../../auth/AuthContextProvider";
import { AuthButtonGroup } from "../AuthButtonGroup";

export const AuthButtonGroupContainer = () => {
  const { signinWithGitHub, signinWithGoogle } = useContext(AuthContext);
  return (
    <AuthButtonGroup
      signinWithGitHub={signinWithGitHub}
      signinWithGoogle={signinWithGoogle}
    />
  );
};
