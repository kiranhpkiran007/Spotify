import firebase from "firebase";
// authentication
import "firebase/auth";
// firestoredatabase
import "firebase/firestore";
// reacltimedatabase
import "firebase/database";
// storage
import "firebase/storage";

// function
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAbl3WenRAMrDwc47gyrWtg7PQuvRiOuKA",
  authDomain: "spotify-clone-4cd5b.firebaseapp.com",
  projectId: "spotify-clone-4cd5b",
  storageBucket: "spotify-clone-4cd5b.appspot.com",
  messagingSenderId: "752343174274",
  appId: "1:752343174274:web:45ef285a3adc65d9c0b89b",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
