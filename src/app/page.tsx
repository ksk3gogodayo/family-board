'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, completeLogin } from '@/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase'; // 👈 authのパスは環境に合わせて

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    completeLogin()
      .then((user) => {
        console.log('completeLogin user:', user);
        if (user) {
          router.push('/board');
        } else {
          // fallback: detect via auth state
          const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              console.log('✅ fallback user from auth:', authUser);
              router.push('/board');
            } else {
              setChecked(true);
            }
            unsubscribe(); // 登録解除
          });
        }
      })
      .catch((error) => {
        console.error('completeLogin error:', error);
        setChecked(true);
      });
  }, []);

  if (!checked) return null;

  return (
    <>
      <button
        onClick={() => {
          console.log('login関数実行');
          login();
        }}
      >
        Googleでログイン
      </button>
      <p>ログイン状態のチェックが完了しました。コンソールログを確認してください。</p>
    </>
  );
}
