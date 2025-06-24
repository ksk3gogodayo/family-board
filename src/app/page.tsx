'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, completeLogin } from '@/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/auth';

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    completeLogin()
      .then((user) => {
        alert('completeLogin終了');
        console.log('completeLogin user:', user);
        if (user) {
          alert('ログイン成功');
          router.push('/board');
        } else {
          alert('ログイン未完了');
          const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
              console.log('✅ fallback user from auth:', authUser);
              alert('✅ fallback user 検出！');
              router.push('/board');
            } else {
              alert('❌ fallback user: null');
              setChecked(true);
            }
            unsubscribe();
          });
        }
      })
      .catch((error) => {
        console.error('completeLogin error:', error);
        alert('completeLogin error');
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
