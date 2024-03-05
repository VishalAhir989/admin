// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoJUlS1IgYgt_cmH59-SqRAPlKlWyL7iA",
  authDomain: "login-1579c.firebaseapp.com",
  projectId: "login-1579c",
  storageBucket: "login-1579c.appspot.com",
  messagingSenderId: "332415831080",
  appId: "1:332415831080:web:f8a911a56de4855bafb91d",
  measurementId: "G-75WWFTSL2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const authUser = getAuth(app);
export const provider = new GoogleAuthProvider();