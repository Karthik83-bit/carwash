import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8HITUVq6QlNKCnU4rvOd8LJ6lyRB2f6g",
  authDomain: "car-wash-1d9df.firebaseapp.com",
  projectId: "car-wash-1d9df",
  storageBucket: "car-wash-1d9df.appspot.com",
  messagingSenderId: "155916398546",
  appId: "1:155916398546:web:091aa2da16fedefb46220b",
  measurementId: "G-6TLLD88C2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);