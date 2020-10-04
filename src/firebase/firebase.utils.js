import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyChHtEfupY5rVxtRlmhx43CT8IP9AJuznk",
  authDomain: "crwn-project-db-335cc.firebaseapp.com",
  databaseURL: "https://crwn-project-db-335cc.firebaseio.com",
  projectId: "crwn-project-db-335cc",
  storageBucket: "crwn-project-db-335cc.appspot.com",
  messagingSenderId: "920680455615",
  appId: "1:920680455615:web:e3ba877bd5cd1001e2550a",
  measurementId: "G-WHP1DK7SG7",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
