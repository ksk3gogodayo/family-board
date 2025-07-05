"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRedirectResult } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const doLogin = async () => {
      const result = await getRedirectResult(auth);
      if (result?.user) {
        console.log("✅ ログイン成功:", result.user);
        router.push("/board");
      } else {
        console.log("❌ ログイン結果なし");
        router.push("/");
      }
    };

    doLogin();
  }, []);

  return <p>ログイン処理中...</p>;
}
