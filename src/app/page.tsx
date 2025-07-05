"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseAuth";

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ ログイン済みユーザー検出:", user);
        router.push("/board");
      } else {
        console.log("ℹ️ 未ログイン");
        setChecked(true);
      }
    });

    return () => unsubscribe(); // クリーンアップ
  }, []); // ← 依存配列に [] を入れて初回だけ実行！

  if (!checked) return <p>ログイン確認中です...</p>;

  return (
    <div>
      <h1>ようこそ Family Board！</h1>
      <button onClick={() => router.push("/auth")}>ログイン</button>
    </div>
  );
}
