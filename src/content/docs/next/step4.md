---
title: '4: 動的なデータ管理(Stateの導入)'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## このステップで学ぶこと

- `useState`フックの使い方
- クライアントコンポーネントの作成
- フォーム入力の管理

### app/page.js を更新

```javascript
'use client'; // この行を追加（重要！）

import { useState } from 'react';

export default function Home() {
  // useState でタスクの状態を管理
  const [tasks, setTasks] = useState([
    { id: 1, title: '買い物に行く', completed: false },
    { id: 2, title: '宿題をする', completed: true },
    { id: 3, title: '友達に連絡する', completed: false },
  ]);

  // 新しいタスクのタイトルを管理
  const [newTaskTitle, setNewTaskTitle] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>タスク管理アプリ</h1>

      {/* タスク追加フォーム */}
      <div style={{ marginBottom: '20px' }}>
        <h2>新しいタスクを追加</h2>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="タスクを入力してください"
          style={{
            padding: '8px',
            width: '300px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          追加
        </button>
      </div>

      {/* タスクリストを表示 */}
      <div>
        <h2>タスク一覧 ({tasks.length}件)</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              margin: '10px 0',
              backgroundColor: task.completed ? '#f0f8f0' : '#fff',
              borderRadius: '4px',
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                fontSize: '16px',
              }}
            >
              {task.title}
            </span>
            <span
              style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}
            >
              {task.completed ? '完了' : '未完了'}
            </span>

            <div style={{ marginTop: '10px' }}>
              <button
                style={{
                  marginRight: '5px',
                  padding: '4px 8px',
                  fontSize: '12px',
                  backgroundColor: task.completed ? '#ffc107' : '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
              >
                {task.completed ? '未完了にする' : '完了にする'}
              </button>
              <button
                style={{
                  padding: '4px 8px',
                  fontSize: '12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                }}
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 重要なポイント

- `'use client'` - ブラウザ側で動作するコンポーネントであることを明示
- `useState` - データの状態を管理する React の機能
- `const [state, setState] = useState(初期値)` - 状態とそれを更新する関数を取得
- `onChange` - 入力値が変更されたときの処理

### 確認事項

- [ ] 入力フィールドが表示される
- [ ] 入力フィールドに文字を入力できる
- [ ] タスク件数が表示される
- [ ] ボタンが表示される（まだ動作しない）

✅ **ステップ 4 完了！** 次は[ステップ 5: タスクの追加](#step5)に進みましょう。

---
