# 🧱 Hexagonal Architecture Sample

このプロジェクトは、ヘキサゴナルアーキテクチャ（Ports and Adapters）の思想に基づいて構築された NestJS アプリケーションです。  

---

## 📁 ディレクトリ構成

```
src/
├── adapters/               ← 外の世界との橋渡し
│   └── controllers/        ← UIやHTTP経由で入力を受け取る（Primary Adapter）
├── domain/                 ← ビジネスルールの中心（依存しない）
│   ├── entities/           ← ドメインエンティティ（Userなど）
│   └── ports/              ← インターフェース層（Port）
├── infrastructure/         ← 外部システムとの連携（Secondary Adapter）
│   └── repositories/       ← DBやAPIとのやりとりを行う
├── use-cases/              ← ユースケース（ビジネスロジック）
├── app.module.ts           ← Nestのエントリポイント（DI構成）
└── main.ts                 ← アプリケーション起動処理

```

---

## 🚀 起動方法

```bash
npm install
npm run start
```

起動後、以下のURLでアクセスできます：

```
http://localhost:3000/
```

---

## 🖥️ 画面操作手順

1. ブラウザで `http://localhost:3000/` にアクセス
2. 「Enter User ID」の欄に任意のID（例：`1`）を入力
3. 「Get User」ボタンをクリック
4. ユーザー情報が画面下に表示されます（例：`Name: Alice`）

---
