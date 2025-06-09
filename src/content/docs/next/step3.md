---
title: '3: タスクの表示(Read)'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## このステップで学ぶこと

- 配列データの表示
- `map()`を使った繰り返し処理
- 条件分岐による表示切り替え

### app/page.js を更新

```javascript
export default function Home() {
  // タスクのサンプルデータ
  const tasks = [
    { id: 1, title: '買い物に行く', completed: false },
    { id: 2, title: '宿題をする', completed: true },
    { id: 3, title: '友達に連絡する', completed: false },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>タスク管理アプリ</h1>

      {/* タスクリストを表示 */}
      <div>
        <h2>タスク一覧</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              backgroundColor: task.completed ? '#f0f8f0' : '#fff',
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <span
              style={{ marginLeft: '10px', fontSize: '12px', color: '#666' }}
            >
              {task.completed ? '完了' : '未完了'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### ポイント解説

- `map()` - 配列の各要素を処理して新しい配列を作成
- `key={task.id}` - 各要素に一意の識別子を付与（React の要件）
- 三項演算子（`condition ? true : false`） - 条件分岐
- `{variable}` - JavaScript の変数を JSX 内で使用

### 確認事項

- [ ] 3 つのタスクが表示される
- [ ] 完了したタスクに取り消し線が表示される
- [ ] 完了したタスクの背景色が緑っぽくなる

✅ **ステップ 3 完了！** 次は[ステップ 4: 動的なデータ管理](#step4)に進みましょう。

---
