// public/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgk9WkJNLrj0ur-bliwxdDoQrikrdCfL7U",
  authDomain: "ascendaup.firebaseapp.com",
  projectId: "ascendaup",
  storageBucket: "ascendaup.appspot.com",
  messagingSenderId: "934093801271",
  appId: "1:934093801271:web:59536a45f3ed67ce35f2ea",
  measurementId: "G-NN8HW8JY8D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
