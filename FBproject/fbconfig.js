
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import{getAuth} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  import {getFirestore} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
  const firebaseConfig = {
    apiKey: "AIzaSyBcOD9zgDkpVbVu9AUNEWmOHfS34NLOC2k",
    authDomain: "js-project-e4517.firebaseapp.com",
    projectId: "js-project-e4517",
    storageBucket: "js-project-e4517.firebasestorage.app",
    messagingSenderId: "1029021510814",
    appId: "1:1029021510814:web:b802e9120fc516abfd1f8f",
    measurementId: "G-WH3M2LMMG7"
  };

    export const firebaseproject = initializeApp(firebaseConfig);
    export const authentication =getAuth(firebaseproject)
    export const db=getFirestore(firebaseproject)