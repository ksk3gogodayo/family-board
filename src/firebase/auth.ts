// src/firebase/auth.ts
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./config";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("ログインエラー:",error);
    throw error;
    }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("ログアウトエラー:", error);
    throw error;
  }
};