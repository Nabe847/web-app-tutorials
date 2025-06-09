# Next.js 初心者向けチュートリアル - タスク管理アプリを作ろう

## 目次

1. [セットアップと環境構築](#step1) - 基本設定
2. [基本ページの作成](#step2) - 静的なページ作成
3. [タスクの表示](#step3) - データ表示（Read）
4. [動的なデータ管理](#step4) - State の導入
5. [タスクの追加](#step5) - データ作成（Create）
6. [タスクの更新と削除](#step6) - データ更新・削除（Update/Delete）
7. [次のステップ](#next-steps) - より高度な機能

---

## <a id="step1"></a>ステップ 1: セットアップと環境構築

### このステップで学ぶこと

- Next.js プロジェクトの作成
- 開発環境の起動
- プロジェクト構造の理解

### 前提知識

- HTML、CSS、JavaScript の基礎
- コマンドライン（ターミナル）の基本的な使い方

### Next.js プロジェクトを作成

ターミナルで以下のコマンドを実行してください：

```bash
npx create-next-app@latest task-manager
```

いくつか質問が表示されるので、以下のように回答してください：

```
✔ Would you like to use TypeScript? … No / Yes
→ **No** を選択（JavaScriptで進めます）

✔ Would you like to use ESLint? … No / Yes
→ **Yes** を選択（コード品質チェックのため）

✔ Would you like to use Tailwind CSS? … No / Yes
→ **No** を選択（今回は通常のCSSを使います）

✔ Would you like to use `src/` directory? … No / Yes
→ **No** を選択（シンプルな構成にします）

✔ Would you like to use App Router? (recommended) … No / Yes
→ **Yes** を選択（最新の推奨方式）

✔ Would you like to customize the default import alias (@/*)? … No / Yes
→ **No** を選択（デフォルトのままで）
```

セットアップが完了したら、プロジェクトフォルダに移動して開発サーバーを起動します：

```bash
cd task-manager
npm run dev
```

ブラウザで `http://localhost:3000` を開くと、Next.js の初期画面が表示されます。

### プロジェクト構造の理解

重要なフォルダとファイル：

- `app/` - ページやレイアウトを格納
- `app/page.js` - トップページ（`/`）
- `app/layout.js` - 全ページ共通のレイアウト
- `public/` - 画像などの静的ファイル

### 確認事項

- [ ] プロジェクトが正常に作成された
- [ ] 開発サーバーが起動している
- [ ] ブラウザで Next.js の初期画面が表示される

✅ **ステップ 1 完了！** 次は[ステップ 2: 基本ページの作成](#step2)に進みましょう。

---

## <a id="step2"></a>ステップ 2: 基本ページの作成

### このステップで学ぶこと

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

## <a id="step3"></a>ステップ 3: タスクの表示（Read 操作）

### このステップで学ぶこと

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

## <a id="step4"></a>ステップ 4: 動的なデータ管理（State の導入）

### このステップで学ぶこと

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

## <a id="step5"></a>ステップ 5: タスクの追加（Create 操作）

### このステップで学ぶこと

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

## <a id="step6"></a>ステップ 6: タスクの更新と削除（Update・Delete 操作）

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

## <a id="next-steps"></a>次のステップ

### 完成したアプリの機能

✅ タスクの表示（Read）
✅ タスクの追加（Create）
✅ タスクの完了状態更新（Update）
✅ タスクの削除（Delete）
✅ 統計情報の表示

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
