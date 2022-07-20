import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, // 如果要使用其他的平台登录，还可以使用facebook等，这时需要引入对应的provider
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore, // 初始化 firestore 实例
  doc, // 允许我们在Firestore 数据库中检索documents
  getDoc, // Documents 的get 和 set 方法
  setDoc,
} from "firebase/firestore";

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleAuthProvider);

// 实例化 FireStore,
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // 从身份验证服务器获取access_token, 然后将其存储在FireStore中
  /**
   * 1. if user data exist, return userDocRef
   * 2. if user data does not exist,  set the document with the data from userAuth im my collection
   */
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // 2
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // 1
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};
