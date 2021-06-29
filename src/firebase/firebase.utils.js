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

export const createUserProfileDocument = async (userAuth, additional) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //see if the user we searched exists, if it doesnt, make a name one, snapshot just tells us if it exists,
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      console.log("error createing user", error.message);
    }
  }
  //return this so our app can use the users reference
  return userRef;
};

//add collection to the fire store
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey); // returns the ref we need to point somewhere to add data
  // we have to set 1 item at a time
  // need to make sure code is predictable, if anything fails, the whole thing must fail. so we do a "batch write"

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc(); //this means give me a new document reference in this collection, and randomly generate me a unique ID
    batch.set(newDocRef, object); //would just do newdocref.set if wasnt batching
  });

  return await batch.commit(); //a promise is returned
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()), //converts to url readable
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting up google auth
const provider = new firebase.auth.GoogleAuthProvider();
//this can be done with twitter etc
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
