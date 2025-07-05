"use client"; // ←これ絶対いるで！

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ ここがポイント！
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const doLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("✅ Popupログイン成功:", result.user);
        router.push("/");
      } catch (err) {
        console.error("❌ Popupログイン失敗:", err);
        router.push("/");
      }
    };

    doLogin();
  }, [router]);

  return <p>ログイン処理中です...</p>;
}
