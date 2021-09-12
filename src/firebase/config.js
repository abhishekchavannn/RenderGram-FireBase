//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrICnq7i4uOG39cheoopyVU3o4LAnJGoc",
  authDomain: "render-gram.firebaseapp.com",
  projectId: "render-gram",
  storageBucket: "render-gram.appspot.com",
  messagingSenderId: "117401233534",
  appId: "1:117401233534:web:628f52bf79b95e011f502f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore,timestamp};