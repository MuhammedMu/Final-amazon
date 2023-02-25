// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optSional
const firebaseConfig = {
  apiKey: "AIzaSyB-tAvBr0nLnrxpUDL7DC-BJ5gmbbElUXk",
  authDomain: "clon-dbd14.firebaseapp.com",
  projectId: "clon-dbd14",
  storageBucket: "clon-dbd14.appspot.com",
  messagingSenderId: "465181167496",
  appId: "1:465181167496:web:5b756a4b99cc89afc4743d",
  measurementId: "G-Z9446DDH7S",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)

export {auth}