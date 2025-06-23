import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '@/firebase/config'; // ✅ エイリアス指定で正しく参照

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('ログイン成功:', result.user);
    return result.user;
  } catch (error) {
    console.error('ログイン失敗:', error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('ログアウト成功');
  } catch (error) {
    console.error('ログアウト失敗:', error);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
