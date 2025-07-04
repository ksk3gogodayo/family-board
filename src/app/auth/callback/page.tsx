// src/app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/auth";
import { getRedirectResult } from "firebase/auth";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("✅ ログイン成功:", result.user);
          router.push("/board");
        } else {
          console.warn("🔁 ログイン結果なし");
          router.push("/");
        }
      })
      .catch((err) => {
        console.error("❌ リダイレクトエラー:", err);
        router.push("/");
      });
  }, []);

  return <p>ログイン処理中です...</p>;
}
