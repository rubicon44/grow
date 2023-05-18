import { createContext, useState, useEffect, useMemo } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { auth } from "../../infra/firebase";
import { signUp, signIn } from "../../infra/api";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // todo: state位置検証
  const [currentUserAuth, setCurrentUserAuth] = useState(null);
  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await auth.currentUser
        .getIdToken(/* forceRefresh */ true)
        .then(async (idToken) => {
          await signIn(idToken)
            .then((response) => {
              const { token, user } = response.data;
              if (token) Cookies.set("token", token);
              if (user) Cookies.set("user", JSON.stringify(user));

              axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
              const tokenAuth = Cookies.get("token");
              axios.defaults.headers.common.Authorization = tokenAuth;
            })
            .catch(() => {
              window.alert(
                "このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。"
              );
              signOut(auth);
            });
        });
    } catch (error) {
      window.alert(
        "このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。"
      );
    }
  };

  const signup = async (nickname, username, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const firebaseId = userCredential.user.uid;
          const user = { nickname, username, email, firebaseId };
          await signUp(user).then().catch();
          await signin(email, password);
        })
        .catch();
    } catch (error) {
      signOut(auth);
    }
  };

  const signout = async () => {
    await signOut(auth);
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUserAuth);
  }, []);

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
