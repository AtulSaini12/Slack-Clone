import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbzy2bVB5qD5nbIFL-Z6dJAssbB_WLGvM",
  authDomain: "slack-clone-22-01.firebaseapp.com",
  projectId: "slack-clone-22-01",
  storageBucket: "slack-clone-22-01.appspot.com",
  messagingSenderId: "847157135793",
  appId: "1:847157135793:web:15b60a7b2f72f05f92d590",
  measurementId: "G-TL3N9MFKGC",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, provider, timestamp };
