from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Todoの一覧取得
@app.get("/todos/", response_model=list[schemas.Todo])
def read_todos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    todos = db.query(models.Todo).offset(skip).limit(limit).all()
    return todos

# 特定のTodoの取得
@app.get("/todos/{todo_id}", response_model=schemas.Todo)
def read_todo(todo_id: int, db: Session = Depends(get_db)):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    return db_todo

# Todoの作成
@app.post("/todos/", response_model=schemas.Todo)
def create_todo(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
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

# Todoの更新
@app.put("/todos/{todo_id}", response_model=schemas.Todo)
def update_todo(todo_id: int, todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    # Todoのタイトルを更新
    db_todo.title = todo.title

    # データベースに変更を保存
    db.commit()
    db.refresh(db_todo)

    return db_todo

# Todoの完了状態の更新
@app.patch("/todos/{todo_id}/complete", response_model=schemas.Todo)
def complete_todo(todo_id: int, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    # Todoの完了状態を更新
    db_todo.completed = True

    # データベースに変更を保存
    db.commit()
    db.refresh(db_todo)

    return db_todo

# 1. Todoの削除
@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    # 指定されたIDのTodoを取得
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    # Todoが存在しない場合は404エラーを返す
    if db_todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")

    # Todoを削除
    db.delete(db_todo)

    # データベースに変更を保存
    db.commit()

    return {"message": "Todo deleted successfully"}