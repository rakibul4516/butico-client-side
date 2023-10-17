// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkRrTJ8Vp8pWJTJkJsgAx2I3hlCtpoRhQ",
  authDomain: "butico-4f68f.firebaseapp.com",
  projectId: "butico-4f68f",
  storageBucket: "butico-4f68f.appspot.com",
  messagingSenderId: "61771561387",
  appId: "1:61771561387:web:656b50cb66eae468c0faee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

