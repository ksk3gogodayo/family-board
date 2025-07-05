"use client";
import { useEffect } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function LoginPage() {
  useEffect(() => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider); // ←ちゃんと呼び出し！
  }, []);

  return <p>Googleに飛ばしてるで〜</p>;
}
