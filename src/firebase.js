// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMULJv7OTTvAaeCBGq8uqO5IP0PWe3w1E",
  authDomain: "projet-jsx.firebaseapp.com",
  databaseURL: "https://projet-jsx-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projet-jsx",
  storageBucket: "projet-jsx.appspot.com",
  messagingSenderId: "553698570927",
  appId: "1:553698570927:web:c5a5bb38bc569d17455a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)