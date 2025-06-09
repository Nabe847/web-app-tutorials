---
title: '2: 基本ページの作成'
pubDate: 2025-06-09
description: 'Next.js の初心者向けチュートリアルです'
author: 'Nabe847'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'Astroのロゴ。'
tags: ['Next.js', 'tutorial']
---

## このステップで学ぶこと

- 既存ページの編集
- 基本的な JSX の書き方
- インラインスタイルの適用

### app/page.js を編集

既存の `app/page.js` を以下の内容に書き換えてください：

```javascript
export default function Home() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>タスク管理アプリ</h1>
      <p>ここにタスクを表示します</p>
    </div>
  );
}
```

保存すると、ブラウザが自動的に更新されて変更が反映されます。

### ポイント解説

- `export default` - コンポーネントをエクスポート
- JSX - HTML に似た構文で UI を記述
- `style` プロパティでインライン CSS を適用
- ブラウザの自動リロード機能

### 確認事項

- [ ] ページが更新され、新しい内容が表示される
- [ ] 「タスク管理アプリ」というタイトルが中央に表示される

✅ **ステップ 2 完了！** 次は[ステップ 3: タスクの表示](#step3)に進みましょう。

---
