'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/auth';

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('✅ ログイン済みユーザー検出:', user);
        router.push('/board');
      } else {
        console.log('ℹ️ 未ログイン');
        setChecked(true);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!checked) return null;

  return (
    <>
      <button onClick={login}>
        Googleでログイン
      </button>
      <p>ログイン状態のチェックが完了しました。未ログインの場合は上のボタンからどうぞ。</p>
    </>
  );
}