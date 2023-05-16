import { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import axios from 'axios';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { auth } from '../../infra/firebase';
import { signUp, signIn } from '../../infra/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
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
              if (token) Cookies.set('token', token);
              if (user) Cookies.set('user', JSON.stringify(user));

              axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
              const tokenAuth = Cookies.get('token');
              axios.defaults.headers.common.Authorization = tokenAuth;
            })
            .catch(() => {
              // alert(response);
              // alert('このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。');
              window.alert("このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。");
              signOut(auth);
            });
        });
    } catch (error) {
      // alert(error);
      window.alert("このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。");
    }
  };

  const signup = async (nickname, username, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const firebaseId = userCredential.user.uid;
          const user = { nickname, username, email, firebaseId };
          await signUp(user).then().catch();
          // .then((response) => {
          //   // todo:APIからユーザーオブジェクトのみが返却されるので、ポップアップでも出す？（ユーザーが作成されました！）
          //   // もしくはエラーの場合のみ出力（取り扱いにルールを設ける）
          // })
          // .catch((data) => {
          // });
          await signin(email, password);
        })
        .catch();
    } catch (error) {
      // alert(error);
      // alert('このメールアドレスはすでに登録されています。');
      signOut(auth);
    }
  };

  const signout = async () => {
    await signOut(auth);
    Cookies.remove('token');
    Cookies.remove('user');
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUserAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUserAuth, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};