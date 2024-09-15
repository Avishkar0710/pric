// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSc-bjbiCh_UKcmmaQG8lb57lSY_O9QA",
  authDomain: "nextapp-5f82f.firebaseapp.com",
  projectId: "nextapp-5f82f",
  storageBucket: "nextapp-5f82f.appspot.com",
  messagingSenderId: "237750465546",
  appId: "1:237750465546:web:89aec6400b86b6ed0b5bf3",
  measurementId: "G-W05X88M00V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}