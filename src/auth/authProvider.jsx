import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../infra/firebase.js';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signin = async (email, password, history) => {
    try {
      // 「history.push」より先に実行（await）
      await auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error);
      });
      history.push("/tasks");
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
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