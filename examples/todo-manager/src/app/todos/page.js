'use client';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, completeTodo, deleteTodo } from '../api/todos';
import style from './page.module.css';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Todo一覧の取得
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error('Todoの取得に失敗しました:', error);
      }
    };
    fetchTodos();
  }, []);

  // Todo追加処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    try {
      const newTodoData = await createTodo(newTodo);
      setTodos([...todos, newTodoData]);
      setNewTodo('');
    } catch (error) {
      console.error('Todoの作成に失敗しました:', error);
    }
  };

  // Todoの完了状態を更新する処理
  const handleToggleComplete = async (todoId) => {
    try {
      const updatedTodo = await completeTodo(todoId);
      setTodos(todos.map((todo) => (todo.id === todoId ? updatedTodo : todo)));
    } catch (error) {
      console.error('Todoの更新に失敗しました:', error);
    }
  };

  // Todoを削除する処理
  const handleDelete = async (todoId) => {
    if (window.confirm('このTodoを削除しますか？')) {
      try {
        await deleteTodo(todoId);
        setTodos(todos.filter((todo) => todo.id !== todoId));
      } catch (error) {
        console.error('Todoの削除に失敗しました:', error);
      }
    }
  };

  return (
    <section className={style.container}>
      <h1>Todoリスト</h1>

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
