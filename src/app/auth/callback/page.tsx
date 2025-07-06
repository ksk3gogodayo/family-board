"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRedirectResult } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        console.log("🌟リダイレクト結果:", result);
        if (result?.user) {
          console.log("ログイン成功:", result.user);
          // ログイン後のページに遷移
          router.replace("/");
        } else {
          console.log("ログイン結果なし（手動キャンセルなど）");
        }
      } catch (error) {
        console.error("リダイレクト後エラー:", error);
      }
    };

    fetchResult();
  }, [router]);

  return <p>Authページ（テスト）</p>;
}
