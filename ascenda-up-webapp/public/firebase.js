// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGE8J19XDGF7kvx6LZohh1vZgTNJqpLCA",
  authDomain: "ascendaup-app.firebaseapp.com",
  projectId: "ascendaup-app",
  storageBucket: "ascendaup-app.firebasestorage.app",
  messagingSenderId: "278146844694",
  appId: "1:278146844694:web:95395cb36eef08d11a8d37",
  measurementId: "G-24YVW5SCFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);