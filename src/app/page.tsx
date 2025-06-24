'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, completeLogin } from '@/firebase/auth';

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
          setChecked(true);
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