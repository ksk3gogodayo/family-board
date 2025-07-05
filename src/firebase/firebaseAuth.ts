import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth"; // ✅これは Firebase公式のパッケージimport { app } from "@/firebase/config";
import { app } from "@/firebase/config"; // ✅ ← これでOKになるはず！

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/** ① サインインを開始（Google へリダイレクト） */
export const login = async () => {
  console.log("ログイン処理開始");
  await signInWithRedirect(auth, provider); // ← 第3引数は削除
  return null;
};

/** ② リダイレクトから戻って来たときに呼び、ユーザーを確定 */
export const completeLogin = async () => {
  try {
    const result = await getRedirectResult(auth);
    console.log("🔍 redirect result:", result);
    console.log("リダイレクト結果:", result);
    if (result?.user) {
      console.log("ログイン成功:", result.user);
      return result.user;
    }
    console.log("ログイン未完了またはキャンセルされました");
    return null;
  } catch (error) {
    console.error("リダイレクトログイン処理でエラー:", error);
    return null;
  }
};

export const logout = () => signOut(auth);

/** 現在認証されているユーザーを返す。未ログインの場合は null。 */
export const getCurrentUser = () => auth.currentUser;

// 👇 これが今回必要！
export { auth };
