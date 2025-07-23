
// firebase.js

// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// Configuração do Firebase para Ascenda Up
const firebaseConfig = {
  apiKey: "AIzaSyBkgWXJNrLjoru-bliwxdDoQriKrdCfL7U",
  authDomain: "ascendaup.firebaseapp.com",
  projectId: "ascendaup",
  storageBucket: "ascendaup.firebasestorage.app",
  messagingSenderId: "934093010271",
  appId: "1:934093010271:web:59536a45f3ed67ce35f2ea",
  measurementId: "G-NN0HW8JY0D"
};

// Inicializa o app e exporta o módulo de autenticação
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
