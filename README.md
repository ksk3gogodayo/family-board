# 👨‍👩‍👧‍👦 Family Board

家族で気軽にメッセージを共有できる掲示板アプリです。  
Next.js × Firebase を使って開発中。

---

## 🛠 技術スタック

- **フロントエンド**: Next.js (App Router) + TypeScript + Tailwind CSS
- **認証**: Firebase Authentication（Googleログイン）
- **データベース**: Firestore（NoSQL）
- **デプロイ予定**: Vercel
- **環境構築**: `create-next-app --app` テンプレート使用

---

## 🔑 機能（実装済）

- [x] Googleアカウントでログイン / ログアウト
- [x] メッセージ投稿フォーム（Firestoreに保存）
- [x] 投稿者情報（名前・UID）も保存

---

## 🧪 今後の予定（ToDo）

- [ ] 投稿一覧の表示（リアルタイム取得）
- [ ] 投稿削除 / 編集機能
- [ ] 管理者のみ投稿削除できるように
- [ ] スマホでも見やすいUI調整
- [ ] Vercelへの公開

---

## 📸 スクリーンショット

（ここに画像を貼る予定）

---

## 📂 ディレクトリ構成（抜粋）
src/
├── app/
│   └── page.tsx          // メイン画面
├── firebase/
│   ├── config.ts         // Firebase初期化
│   └── auth.ts           // ログイン・ログアウト処理

---

## 📥 セットアップ手順

1. このリポジトリをクローン

   ```bash
   git clone https://github.com/ksk3gogodayo/family-board.git
   cd family-board
   ```

2.	依存パッケージをインストール
    ```bash
    npm install
    ```

3.	Firebaseの設定ファイルを用意
    ```bash
    src/firebase/config.ts に以下のように記述（自分のプロジェクト設定に置き換える）
    // src/firebase/config.ts
    import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);
    ```

4.	開発サーバーを起動
    ```bash
    npm run dev
    ```

5.	ブラウザで http://localhost:3000 を開く

---

## 👤 作者

- kei（@ksk3gogodayo）
- React × TypeScriptでWebアプリ開発中
- 他のアプリ： [health-log-app-pro](https://github.com/ksk3gogodayo/health-log-app-pro)

---

## 📅 更新履歴

- 2025-06-18：Firebase認証＋Firestore投稿連携完了 🌱
