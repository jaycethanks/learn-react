import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt1kNYxMlE3DD6SqauKG1bN4Yle_PbczM",
  authDomain: "crwn-clothing-db-39d75.firebaseapp.com",
  projectId: "crwn-clothing-db-39d75",
  storageBucket: "crwn-clothing-db-39d75.appspot.com",
  messagingSenderId: "121732420467",
  appId: "1:121732420467:web:f4d9f638d65d9a56fb2b06",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);
