const API_BASE_URL = 'http://localhost:8000';

// Todo一覧の取得
export async function getTodos() {
  const response = await fetch(`${API_BASE_URL}/todos/`);
  if (!response.ok) {
    throw new Error('Todoの取得に失敗しました');
  }
  return response.json();
}

// 新規Todoの作成
export async function createTodo(title) {
  const response = await fetch(`${API_BASE_URL}/todos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Todoの作成に失敗しました');
  }
  return response.json();
}

// Todoの完了状態の更新
export async function completeTodo(id) {
  const response = await fetch(`${API_BASE_URL}/todos/${id}/complete`, {
    method: 'PATCH',
  });
  if (!response.ok) {
    throw new Error('Todoの更新に失敗しました');
  }
  return response.json();
}

// Todoの削除
export async function deleteTodo(id) {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Todoの削除に失敗しました');
  }
  return response.json();
}
