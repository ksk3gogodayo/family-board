"use client";

import { useEffect, useState } from "react";
import { saveMessageToDB, fetchMessages } from "@/firebase/postMessageToDB"; // ← まとめてOK
import { auth } from "@/firebase/config";
import { Message } from "@/types/message";

export default function BoardPage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  // 投稿処理
  const handlePost = async () => {
    if (loading) return;
    const user = auth.currentUser;
    if (!user || !text.trim()) return;
    setLoading(true);
    try {
      await saveMessageToDB(text, user.uid); // ← ✅ 名前変更に合わせる
      console.log("✅ 投稿完了");
      setText("");
      await loadMessages(); // 投稿後に再読み込み
    } catch (err) {
      console.error("❌ 投稿失敗:", err);
    } finally {
      setLoading(false);
    }
  };

  // 投稿一覧取得
  const loadMessages = async () => {
    const data = await fetchMessages();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div>
      <h1>Boardページです！</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="投稿内容を入力"
      />
      <button onClick={handlePost} disabled={loading}>
        {loading ? "投稿中…" : "投稿"}
      </button>

      <hr />

      <h2>投稿一覧</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.text}（uid: {msg.uid}）
          </li>
        ))}
      </ul>
    </div>
  );
}
