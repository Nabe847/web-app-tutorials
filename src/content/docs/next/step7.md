---
title: '7: 次のステップ'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## 完成したアプリの機能

- ✅ タスクの表示（Read）
- ✅ タスクの追加（Create）
- ✅ タスクの完了状態更新（Update）
- ✅ タスクの削除（Delete）
- ✅ 統計情報の表示

### 学んだ Next.js の基本概念

1. **コンポーネント** - UI の部品を関数として作成
2. **State（状態）** - データの管理と更新
3. **イベントハンドリング** - ユーザーの操作に応答
4. **条件付きレンダリング** - 条件に応じた表示切り替え
5. **配列の操作** - map、filter、スプレッド演算子

### さらなる機能拡張

このチュートリアルをマスターしたら、以下の機能を追加してみましょう：

- **タスクの編集機能** - 既存タスクのタイトル変更
- **カテゴリー分け** - 仕事、プライベートなどの分類
- **期限設定** - 締切日の管理
- **サーバーサイドでのデータ永続化** - データベースやファイルシステムでの保存
- **複数ページの作成** - タスク詳細ページや設定ページの追加

#### サーバーサイドデータ永続化の実装例

現在はブラウザのメモリ上でデータを管理していますが、実際のアプリではサーバーでデータを保存します：

**ステップ 1: API Route の作成**

```javascript
// app/api/tasks/route.js
let tasks = []; // 実際はデータベースを使用

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request) {
  const newTask = await request.json();
  tasks.push(newTask);
  return Response.json(newTask);
}
```

**ステップ 2: フロントエンドで API 呼び出し**

```javascript
// タスク取得
const fetchTasks = async () => {
  const response = await fetch('/api/tasks');
  const data = await response.json();
  setTasks(data);
};

// タスク追加
const addTask = async (taskData) => {
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  fetchTasks(); // 最新データを取得
};
```

この方法により、ページを再読み込みしてもタスクが消えない永続的なアプリを作成できます。

### 参考リンク

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [React 公式ドキュメント](https://react.dev/)

お疲れさまでした！このチュートリアルで Next.js の基本的な CRUD 操作を学ぶことができました。
