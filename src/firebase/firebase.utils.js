//need import firebase for second 2 to work
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCUnyKZHtkJjs840eJiyQFNlqXFAxOQzEA",
  authDomain: "crwn-clothing-86007.firebaseapp.com",
  projectId: "crwn-clothing-86007",
  storageBucket: "crwn-clothing-86007.appspot.com",
  messagingSenderId: "873290855925",
  appId: "1:873290855925:web:ade9b418972667524c1cbc",
  measurementId: "G-ZM2GQ36N0F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting up google auth
const provider = new firebase.auth.GoogleAuthProvider();
//this can be done with twitter etc
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
