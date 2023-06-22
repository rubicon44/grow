import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  linkWithPopup,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  INVALID_CREDENTIALS:
    "パスワードが正しくありません。再度パスワードをご確認の上ログインしてください。",
};

export const useFirebaseAuth = () => {
  const navigateToTasks = useNavigate();
  const [currentUserAuth, setCurrentUserAuth] = useState(null);

  const handleSignout = async (auth) => {
    await signOut(auth);
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.reload();
  };

  const handleUserSignUp = async (currentUser) => {
    const nickname = currentUser.displayName;
    const username = currentUser.displayName;
    const { email } = currentUser;
    const firebaseId = currentUser.uid;
    const userData = { nickname, username, email, firebaseId };
    await signUp(userData);
  };

  const handleUserSignIn = async (currentUser) => {
    const idToken = await currentUser.getIdToken(/* forceRefresh */ true);
    const response = await signIn(idToken);

    const { token, user } = response.data;
    if (token && user) {
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
      axios.defaults.headers.common.Authorization = token;
      await navigateToTasks("/tasks");
    }
  };

  const handleUserAuthentication = async (currentUser) => {
    await handleUserSignUp(currentUser);
    await handleUserSignIn(currentUser);
  };

  const handleGoogleAuthentication = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      const { currentUser } = auth;
      await handleUserAuthentication(currentUser);
    } catch (error) {
      const githubProvider = new GithubAuthProvider();
      await signInWithPopup(auth, githubProvider);

      const { currentUser } = auth;
      const linkedProviders = currentUser.providerData.map(
        (providerData) => providerData.providerId
      );
      const { providerId } = provider;
      if (
        providerId === "google.com" &&
        !linkedProviders.includes("google.com")
      ) {
        const googleProvider = new GoogleAuthProvider();
        await linkWithPopup(currentUser, googleProvider);
      }
      await handleUserAuthentication(currentUser);
    }
  };

  const handleGitHubAuthentication = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      const { currentUser } = auth;
      await handleUserAuthentication(currentUser);
    } catch (error) {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);

      const { currentUser } = auth;
      const linkedProviders = currentUser.providerData.map(
        (providerData) => providerData.providerId
      );
      const { providerId } = provider;
      if (
        providerId === "github.com" &&
        !linkedProviders.includes("github.com")
      ) {
        const githubProvider = new GithubAuthProvider();
        await linkWithPopup(currentUser, githubProvider);
      }
      await handleUserAuthentication(currentUser);
    }
  };

  const signinWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const { currentUser } = auth;
      await handleUserSignIn(currentUser);
    } catch (error) {
      alert(ERROR_MESSAGES.INVALID_CREDENTIALS);
      handleSignout(auth);
    }
  };

  const signinWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    await handleGitHubAuthentication(provider);
  };

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await handleGoogleAuthentication(provider);
  };

  const signupWithEmailAndPassword = async (
    nickname,
    username,
    email,
    password
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseId = userCredential.user.uid;
      const user = { nickname, username, email, firebaseId };
      await signUp(user);
      await signinWithEmailAndPassword(email, password);
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

  return {
    currentUserAuth,
    signinWithEmailAndPassword,
    signinWithGitHub,
    signinWithGoogle,
    signupWithEmailAndPassword,
    signout,
  };
};
