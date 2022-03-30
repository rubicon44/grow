import * as firebase from 'firebase/app';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

firebase.initializeApp({
  // Authentication infomation
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

// 認証用
const auth = getAuth();
let currentUid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const { currentUser } = auth;
    currentUid = currentUser.uid;
  } else {
    signOut(auth);
  }
});

export { auth, currentUid };
