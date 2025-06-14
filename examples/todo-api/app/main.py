from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, exceptions
from .database import engine, get_db

# データベースのテーブルを作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # フロントエンドのURL
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのヘッダーを許可
)

@app.get("/")
def read_root():
    return {"message": "Hello World"}


# 1. Todoの一覧取得
@app.get("/todos/", response_model=list[schemas.Todo])
def read_todos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # データベースからTodoを取得
    todos = db.query(models.Todo).offset(skip).limit(limit).all()
    return todos


# 2. 特定のTodoの取得
@app.get("/todos/{todo_id}", response_model=schemas.Todo)
def read_todo(todo_id: int, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise exceptions.TodoNotFoundError()

    return db_todo


# Todoの作成
@app.post("/todos/", response_model=schemas.Todo)
def create_todo(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    # タイトルが空の場合はエラー
    if not todo.title.strip():
        raise exceptions.InvalidTodoDataError("タイトルは空にできません")

    # 1. 新しいTodoインスタンスの作成
    db_todo = models.Todo(title=todo.title)

    # 2. データベースに追加
    db.add(db_todo)

    # 3. 変更を保存
    db.commit()

    # 4. データベースから最新のデータを取得
    db.refresh(db_todo)

    # 5. 作成したTodoを返す
    return db_todo


# 1. Todoの完全更新
@app.put("/todos/{todo_id}", response_model=schemas.Todo)
def update_todo(todo_id: int, todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    # タイトルが空の場合はエラー
    if not todo.title.strip():
        raise exceptions.InvalidTodoDataError("タイトルは空にできません")

    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise exceptions.TodoNotFoundError()

    # Todoのタイトルを更新
    db_todo.title = todo.title

    # データベースに変更を保存
    db.commit()
    db.refresh(db_todo)

    return db_todo


# 2. Todoの完了状態の更新
@app.patch("/todos/{todo_id}/complete", response_model=schemas.Todo)
def complete_todo(todo_id: int, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise exceptions.TodoNotFoundError()

    # Todoの完了状態を更新
    db_todo.completed = True

    # データベースに変更を保存
    db.commit()
    db.refresh(db_todo)

    return db_todo


# Todoの削除
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise exceptions.TodoNotFoundError()

    # Todoを削除
    db.delete(db_todo)

    # データベースに変更を保存
    db.commit()

    return {"message": "Todoを削除しました"}
