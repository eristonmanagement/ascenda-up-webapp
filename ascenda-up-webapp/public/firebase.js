// public/firebase.js

// Importa funções necessárias
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkgWXJNrLrj0ur-bliwxdDoQrikrdCfL7U",
  authDomain: "ascendaup.firebaseapp.com",
  projectId: "ascendaup",
  storageBucket: "ascendaup.appspot.com",
  messagingSenderId: "934093010271",
  appId: "1:934093010271:web:59536a45f3ed67ce35f2ea",
  measurementId: "G-NN8HW8JY8D"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta o auth para ser usado no index.html
export { auth };
