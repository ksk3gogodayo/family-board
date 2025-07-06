import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth"; // ✅これは Firebase公式のパッケージimport { app } from "@/firebase/config";
import { app } from "@/firebase/config"; // ✅ ← これでOKになるはず！
import { signInWithPopup } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  try {
    console.log("ログイン開始");
    const result = await signInWithPopup(auth, provider);
    console.log("ログイン成功:", result.user);
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error("Firebaseエラー:", error.message, error.code);
    } else {
      console.error("不明なエラー:", error);
    }
  }
};

export const logout = () => signOut(auth);

/** 現在認証されているユーザーを返す。未ログインの場合は null。 */
export const getCurrentUser = () => auth.currentUser;

// 👇 これが今回必要！
export { auth };
