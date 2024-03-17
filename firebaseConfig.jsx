// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW0O3XXhHos71sbCjkwqFb6F3AbeIqHek",
  authDomain: "playsgo.firebaseapp.com",
  projectId: "playsgo",
  storageBucket: "playsgo.appspot.com",
  messagingSenderId: "668773180006",
  appId: "1:668773180006:web:a51718fd284b13a827c3a7",
  measurementId: "G-X9017Z90WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;