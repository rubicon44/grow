// import firebase from "firebase/app";
import * as firebase from "firebase/app";
// import "firebase/auth";
import { getAuth } from "firebase/auth";
// require("firebase/auth")

firebase.initializeApp({
  // Authentication infomation
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
})

// 認証用
// const auth = firebase.auth();
const auth = getAuth();

let current_uid;
auth.onAuthStateChanged((user) => {
  if (user) {
    const user = auth.currentUser;
    current_uid = user.uid;
  } else {
    auth.signOut();
  }
});

export { auth, current_uid };