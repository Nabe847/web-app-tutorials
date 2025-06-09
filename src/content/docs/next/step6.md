---
title: '6: タスクの更新,削除(Update,Delete)'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## <a id="step6"></a>

### このステップで学ぶこと

- 配列要素の更新
- 配列からの要素削除
- 確認ダイアログの表示

### app/page.js を最終版に更新

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
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  // タスクの完了状態を切り替える関数
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // タスクを削除する関数
  const deleteTask = (id) => {
    if (window.confirm('このタスクを削除しますか？')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
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
          onClick={addTask}
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
        {tasks.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            タスクがありません。上記から新しいタスクを追加してください。
          </p>
        ) : (
          tasks.map((task) => (
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
                  onClick={() => toggleTask(task.id)} // クリック時にtoggleTask関数を実行
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
                  onClick={() => deleteTask(task.id)} // クリック時にdeleteTask関数を実行
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
          ))
        )}
      </div>

      {/* 統計情報 */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
        }}
      >
        <h3>統計</h3>
        <p>全タスク: {tasks.length}件</p>
        <p>完了: {tasks.filter((task) => task.completed).length}件</p>
        <p>未完了: {tasks.filter((task) => !task.completed).length}件</p>
      </div>
    </div>
  );
}
```

### 解説

- `toggleTask` - 指定された ID のタスクの完了状態を反転
- `deleteTask` - 指定された ID のタスクを削除
- `map` - 配列の各要素を変換（更新用）
- `filter` - 条件に合う要素だけを抽出（削除用）
- `window.confirm` - 削除確認ダイアログを表示

### 確認事項

- [ ] 「完了にする」ボタンでタスクの状態が切り替わる
- [ ] 完了したタスクは取り消し線と背景色が変わる
- [ ] 「削除」ボタンで確認ダイアログが表示される
- [ ] 削除を実行するとタスクが消える
- [ ] 統計情報が正しく表示される
- [ ] タスクが 0 件の時にメッセージが表示される

✅ **ステップ 6 完了！** 基本的な CRUD 操作がすべて実装できました！

---
