// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkgWkJNrLj0ur-bliwxdDoQrikrdCfL7U",
  authDomain: "ascendaup.firebaseapp.com",
  projectId: "ascendaup",
  storageBucket: "ascendaup.appspot.com",
  messagingSenderId: "934093010271",
  appId: "1:934093010271:web:59536a45f3ed67ce35f2ea",
  measurementId: "G-NN8HW8JY8D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
