// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChOk2eL644Q0gEqE4GBYKMGbssw9VVwpU",
  authDomain: "myf-haeun2.firebaseapp.com",
  projectId: "myf-haeun2",
  storageBucket: "myf-haeun2.appspot.com",
  messagingSenderId: "98254333836",
  appId: "1:98254333836:web:9451c4dfa093625ff1d8a9",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
