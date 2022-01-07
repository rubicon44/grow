import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../infra/firebase.js';
import { signUp } from '../infra/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (name, email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const user = { name: name };
      await signUp(user)
      .then(results => {
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
      // const idToken = auth.currentUser.getIdToken(/* forceRefresh */ true);
      // console.log(idToken);
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