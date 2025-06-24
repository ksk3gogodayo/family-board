// src/lib/firebase/postMessage.ts（仮）
import { db } from '@/firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export const postMessage = async (text: string, uid: string) => {
  await addDoc(collection(db, 'messages'), {
    text,
    uid,
    createdAt: serverTimestamp(),
  })
}