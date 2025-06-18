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

## 👤 作者

- kei（@ksk3gogodayo）
- React × TypeScriptでWebアプリ開発中
- 他のアプリ： [health-log-app-pro](https://github.com/ksk3gogodayo/health-log-app-pro)

---

## 📅 更新履歴

- 2025-06-18：Firebase認証＋Firestore投稿連携完了 🌱
