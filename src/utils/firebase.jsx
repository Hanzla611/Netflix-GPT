// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGEJ3kLQ0mQbYeo1D8uJIbZwSYjpS6Sys",
  authDomain: "netflixgpt-d7449.firebaseapp.com",
  projectId: "netflixgpt-d7449",
  storageBucket: "netflixgpt-d7449.appspot.com",
  messagingSenderId: "697334940007",
  appId: "1:697334940007:web:a22f6a884898a30ea7efc2",
  measurementId: "G-NBCF10Z0DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();