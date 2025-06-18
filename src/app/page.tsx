'use client';

import { useEffect, useState, } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { signInWithGoogle, logout } from '@/firebase/auth';
import { User } from 'firebase/auth';
import { addDoc ,collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const [message, setMessage] = useState('');
  const handleSubmit = async () => {
    if (!message) return;
    await addDoc(collection(db, 'posts'), {
      text: message,
      createdAt: serverTimestamp(),
      user: {
        uid: user.uid,
        name: user?.displayName,
      },
    });
    setMessage('');
  };

  return (
    <main className='p-4'>
      {user ? (
        <>
          <p>こんにちは、{user?.displayName}さん！</p>
          <button onClick={logout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">ログアウト</button>

          <div className='mt-4'>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 w-full" placeholder="メッセージを入力"/>
            <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
              投稿する
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => signInWithGoogle()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            Googleでログイン
        </button>
      )}
    </main>
  );
}