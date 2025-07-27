// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGE8J19XDGF7kvx6LZohh1vZgTNJqpLCA",
  authDomain: "ascendaup-app.firebaseapp.com",
  projectId: "ascendaup-app",
  storageBucket: "ascendaup-app.appspot.com",
  messagingSenderId: "278146844694",
  appId: "1:278146844694:web:95395cb36eef08d11a8d37",
  measurementId: "G-24YVW5SCFH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, doc, setDoc, getDoc };
