// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY0hBDjSLaX5epZrcZBeV97Kwgp89bdsM",
  authDomain: "simple-firebase-athentic-295a7.firebaseapp.com",
  projectId: "simple-firebase-athentic-295a7",
  storageBucket: "simple-firebase-athentic-295a7.appspot.com",
  messagingSenderId: "690920756816",
  appId: "1:690920756816:web:684a70eb3785f3cc45e355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app