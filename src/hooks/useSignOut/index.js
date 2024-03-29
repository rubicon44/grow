import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContextProvider";
import { useGetErrorMessage } from "../useGetErrorMessage";

export const useSignOut = () => {
  const navigateToTop = useNavigate();
  const { signout } = useContext(AuthContext);
  const { getErrorMessage } = useGetErrorMessage();

  const handleSignout = async () => {
    try {
      await navigateToTop("/");
      await signout();
    } catch (error) {
      const verbForErrorMessage = `ユーザー`;
      const objectForErrorMessage = `ログアウト`;
      getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
    }
  };
  return { handleSignout };
};
