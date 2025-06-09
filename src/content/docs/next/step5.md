---
title: '5: タスクの追加(Create)'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## このステップで学ぶこと

- イベントハンドラーの実装
- 配列への要素追加
- フォーム入力のクリア

### app/page.js を更新

前のステップのコードに以下の関数を追加し、ボタンにクリックイベントを設定します：

```javascript
'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: '買い物に行く', completed: false },
    { id: 2, title: '宿題をする', completed: true },
    { id: 3, title: '友達に連絡する', completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  // タスクを追加する関数
  const addTask = () => {
    if (newTaskTitle.trim() === '') {
      alert('タスクタイトルを入力してください');
      return;
    }

    const newTask = {
      id: Date.now(), // 簡単なID生成（現在時刻を使用）
      title: newTaskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]); // 既存のタスクに新しいタスクを追加
    setNewTaskTitle(''); // 入力フィールドをクリア
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>タスク管理アプリ</h1>

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
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
        />
        <button
          onClick={addTask} // クリック時にaddTask関数を実行
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

### 解説

- `addTask` 関数でタスクの追加処理を実装
- `[...tasks, newTask]` - スプレッド演算子で既存配列に新要素を追加
- `Date.now()` で簡単なユニーク ID を生成
- `onKeyPress` で Enter キーでも追加できるように
- `trim()` で空白文字のみの入力をチェック

### 確認事項

- [ ] 入力フィールドに文字を入力して「追加」ボタンを押すとタスクが追加される
- [ ] Enter キーでもタスクが追加される
- [ ] 追加後、入力フィールドがクリアされる
- [ ] 空のタスクを追加しようとするとアラートが表示される
- [ ] タスク件数が正しく更新される

✅ **ステップ 5 完了！** 次は[ステップ 6: タスクの更新と削除](#step6)に進みましょう。

---
