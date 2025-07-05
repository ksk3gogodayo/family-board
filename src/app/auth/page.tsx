"use client";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function AuthPage() {
  useEffect(() => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider); // ← これが肝心！
  }, []);

  return <p>Googleにリダイレクト中...</p>;
}
