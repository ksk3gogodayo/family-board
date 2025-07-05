import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "./config";
import { Message } from "@/types/message";

// 投稿一覧を取得（新しい順）
export const fetchMessages = async (): Promise<Message[]> => {
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Message[];
};

// ✅ 関数名をわかりやすく＆被らないように変更
export const saveMessageToDB = async (text: string, uid: string) => {
  const docRef = await addDoc(collection(db, "messages"), {
    text,
    uid,
    createdAt: new Date(),
  });
  return docRef.id;
};
