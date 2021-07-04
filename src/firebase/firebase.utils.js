import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBWss97Zvv_UqMaYgtlUcZwfJuV0RiNQHM",
  authDomain: "crwn-db-8187e.firebaseapp.com",
  projectId: "crwn-db-8187e",
  storageBucket: "crwn-db-8187e.appspot.com",
  messagingSenderId: "968434311007",
  appId: "1:968434311007:web:d88b24282dcaca676fe0ea"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;