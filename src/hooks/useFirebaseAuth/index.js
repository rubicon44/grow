import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../infra/firebase";
import { signUp, signIn } from "../../infra/api";

const ERROR_MESSAGES = {
  EMAIL_NOT_FOUND:
    "このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。",
  EMAIL_ALREADY_USED:
    "このメールアドレスはすでに使用されています。再度メールアドレスをご確認の上ユーザー登録をしてください。",
};

export const useFirebaseAuth = () => {
  const [currentUserAuth, setCurrentUserAuth] = useState(null);

  const handleSignout = async (auth) => {
    await signOut(auth);
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.reload();
  };

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const idToken = await auth.currentUser.getIdToken(
        /* forceRefresh */ true
      );
      const response = await signIn(idToken);

      const { token, user } = response.data;
      if (token && user) {
        Cookies.set("token", token);
        Cookies.set("user", JSON.stringify(user));
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
        axios.defaults.headers.common.Authorization = token;
      }
    } catch (error) {
      alert(ERROR_MESSAGES.EMAIL_NOT_FOUND);
      handleSignout(auth);
      throw error;
    }
  };

  const signup = async (nickname, username, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseId = userCredential.user.uid;
      const user = { nickname, username, email, firebaseId };
      await signUp(user);
      await signin(email, password);
    } catch (error) {
      alert(ERROR_MESSAGES.EMAIL_ALREADY_USED);
      handleSignout(auth);
    }
  };

  const signout = async () => {
    handleSignout(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUserAuth);
  }, []);

  return { currentUserAuth, signin, signup, signout };
};
