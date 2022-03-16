import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../infra/firebase.js';
import { signUp, signIn } from '../infra/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = { name: name, email: email};
      await signUp(user)
      .then(response => {
        console.log(response.data);
        // todo:APIからユーザーオブジェクトのみが返却されるので、ポップアップでも出す？（ユーザーが作成されました！）
        // もしくはエラーの場合のみ出力（取り扱いにルールを設ける）
      })
      .catch(data => {
        console.log(data);
      });
      await signin(email, password);
    } catch (error) {
      alert(error);
      alert('このメールアドレスはすでに登録されています。');
      signOut(auth);
    };
  };

  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        signIn(idToken)
        .then(async function(response) {
          const { token, user } = response.data
          if (token) await localStorage.setItem('token', token);
          if (user) await localStorage.setItem('user', JSON.stringify(user));
          await window.location.reload();
        })
        .catch(async function (response) {
          alert(response);
          alert('このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。');
          signOut(auth);
        });
      });
    } catch (error) {
      alert(error);
    }
  };

  const signout = async () => {
    await signOut(auth);
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    window.location.reload();
    navigate("/");
  }

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};