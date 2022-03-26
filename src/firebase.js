// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import Firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxsHKFqTD-ahakQdQvt2ba_JWM7uXPsfw",
  authDomain: "handyman-38f0f.firebaseapp.com",
  projectId: "handyman-38f0f",
  storageBucket: "handyman-38f0f.appspot.com",
  messagingSenderId: "756044344274",
  appId: "1:756044344274:web:d103ca3b59e6097d90f60b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, analytics, auth, provider };
