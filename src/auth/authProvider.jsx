import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../infra/firebase';
import { signUp, signIn } from '../infra/api';

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const signin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await auth.currentUser
        .getIdToken(/* forceRefresh */ true)
        .then((idToken) => {
          signIn(idToken)
            .then(async (response) => {
              const { token, user } = response.data;
              if (token) await localStorage.setItem('token', token);
              if (user)
                await localStorage.setItem('user', JSON.stringify(user));
              await window.location.reload();
            })
            .catch(async () => {
              // alert(response);
              // alert('このメールアドレスは見つかりません。再度メールアドレスをご確認の上ログインしてください。');
              signOut(auth);
            });
        });
    } catch (error) {
      // alert(error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const firebaseId = userCredential.user.uid;
          const user = { name, email, firebaseId };
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
      // .catch((data) => {
      // });
    } catch (error) {
      // alert(error);
      // alert('このメールアドレスはすでに登録されています。');
      signOut(auth);
    }
  };

  const signout = async () => {
    await signOut(auth);
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signin,
        signup,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
