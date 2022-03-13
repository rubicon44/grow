import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../infra/firebase.js';
import { signUp, signIn } from '../infra/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (name, email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
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
      await signin(email, password, history);
    } catch (error) {
      alert(error);
      alert('このメールアドレスはすでに登録されています。');
      auth.signOut();
    };
  };

  const signin = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
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
          auth.signOut();
        });
      });
      // history.push("/tasks");
    } catch (error) {
      alert(error);
    }
  };

  const signout = async (history) => {
    await auth.signOut();
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    window.location.reload();
    history.push("/");
  }

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};