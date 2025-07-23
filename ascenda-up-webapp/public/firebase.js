// public/firebase.js

// Importa apenas o necessário do SDK moderno (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkgWkJNrLjr0ur-bliwxdDoQrikrdCfL7U",
  authDomain: "ascendaup.firebaseapp.com",
  projectId: "ascendaup",
  storageBucket: "ascendaup.appspot.com",
  messagingSenderId: "934093010271",
  appId: "1:934093010271:web:59536a45f3ed67ce35f2ea",
  measurementId: "G-NN8HW8JY8D"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta o auth corretamente
export const auth = getAuth(app);
