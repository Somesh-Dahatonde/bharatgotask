// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4GWfA6t4ILxegzqvXnGz7c3L5VB7B7MI",
  authDomain: "bharatgo-135a5.firebaseapp.com",
  projectId: "bharatgo-135a5",
  storageBucket: "bharatgo-135a5.firebasestorage.app",
  messagingSenderId: "712877184736",
  appId: "1:712877184736:web:2af4874b23848f356d6285",
  measurementId: "G-F641CCVG7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
