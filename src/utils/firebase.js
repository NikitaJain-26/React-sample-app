// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZXJs5pqpr8JxfTVOehovH3p6ZSvfMV3o",
  authDomain: "eat-and-repeat-fdac4.firebaseapp.com",
  projectId: "eat-and-repeat-fdac4",
  storageBucket: "eat-and-repeat-fdac4.appspot.com",
  messagingSenderId: "207955027160",
  appId: "1:207955027160:web:1500a98c5d2e40d2db63ad",
  measurementId: "G-C580FRNMK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
