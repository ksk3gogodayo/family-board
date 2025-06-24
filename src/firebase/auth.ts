import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,   // ← 追加
  getRedirectResult,    // ← 追加
  signOut,
} from 'firebase/auth';
import { app } from '@/firebase/config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/** ① サインインを開始（Google へリダイレクト） */
export const login = async () => {
  console.log('ログイン処理開始');
  await signInWithRedirect(auth, provider);
  return null; // 仮に null を返すことで undefined 対策
};

/** ② リダイレクトから戻って来たときに呼び、ユーザーを確定 */
export const completeLogin = async () => {
  try {
    const result = await getRedirectResult(auth);
    console.log('リダイレクト結果:', result);
    if (result?.user) {
      console.log('ログイン成功:', result.user);
      return result.user;
    }
    console.log('ログイン未完了またはキャンセルされました');
    return null;          // まだ未ログイン
  } catch (error) {
    console.error('リダイレクトログイン処理でエラー:', error);
    return null;
  }
};

export const logout = () => signOut(auth);

/** 現在認証されているユーザーを返す。未ログインの場合は null。 */
export const getCurrentUser = () => auth.currentUser;