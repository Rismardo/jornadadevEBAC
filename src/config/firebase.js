// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCxGqUpD2A8owxgUda6FKakK16wqATr_GU",
  authDomain: "tiktok---jornada-95505.firebaseapp.com",
  projectId: "tiktok---jornada-95505",
  storageBucket: "tiktok---jornada-95505.appspot.com",
  messagingSenderId: "170360490698",
  appId: "1:170360490698:web:86f1d2fa15566d05fc8233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
