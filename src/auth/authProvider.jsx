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
      .then(results => {
        // todo:APIからの返却情報をlocalstorageに保存。
        console.log(results.data);
      })
      .catch(data => {
        console.log(data);
      });;
      history.push("/tasks");
    } catch (error) {
      alert(error);
    }
  };

  const signin = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      const idToken = auth.currentUser.getIdToken(/* forceRefresh */ true);
      await signIn(idToken)
      .then(results => {
        // todo:APIからの返却情報をlocalstorageに保存。
        console.log(results.data);
      })
      .catch(data => {
        console.log(data);
      });;
      history.push("/tasks");
    } catch (error) {
      alert(error);
    }
  };

  const signout = async () => {
    await auth.signOut();
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