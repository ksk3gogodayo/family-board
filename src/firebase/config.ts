// ✅ initializeAuth をやめて getAuth に戻す
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'family-board-zeta.vercel.app',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

//const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig); // ←これに export をつけてる？
export const auth = getAuth(app); // ← ポップアップリゾルバ不要
export const db = getFirestore(app);
