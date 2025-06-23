// src/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "family-board-cde8b.firebaseapp.com",
  projectId: "family-board-cde8b",
  storageBucket: "family-board-cde8b.firebasestorage.app",
  messagingSenderId: "901900098734",
  appId: "1:901900098734:web:ab43c0dd5ad9878c5fa13f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);