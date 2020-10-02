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

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
