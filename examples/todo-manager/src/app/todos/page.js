'use client';
import { useState } from 'react';
import style from './page.module.css';

export default function Todos() {
  // Todoデータの定義
  const [todos, setTodos] = useState([
    { id: 1, title: '買い物に行く', completed: false },
    { id: 2, title: 'メールを確認する', completed: false },
    { id: 3, title: '資料を作成する', completed: false },
    { id: 4, title: '友達に電話する', completed: false },
    { id: 5, title: '部屋の掃除', completed: false },
  ]);

  // 入力値の状態管理
  const [newTodo, setNewTodo] = useState('');

  // Todo追加処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newId =
      todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodo, completed: false }]);
    setNewTodo('');
  };

  // Todoの完了状態を更新する処理
  const handleToggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 1. Todoを削除する処理
  const handleDelete = (todoId) => {
    if (window.confirm('このTodoを削除しますか？')) {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  return (
    <section className={style.container}>
      <h1>Todoリスト</h1>

      {/* Todo追加フォーム */}
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいTodoを入力"
          className={style.input}
        />
        <button type="submit" className={style.button}>
          追加
        </button>
      </form>

      {/* Todo一覧 */}
      <div className={style.checkbox}>
        {todos.map((todo) => (
          <div key={todo.id} className={style.todoItem}>
            <label className={todo.completed ? style.completed : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              {todo.title}
            </label>
            <button onClick={() => handleDelete(todo.id)}>削除</button>
          </div>
        ))}
      </div>
    </section>
  );
}
