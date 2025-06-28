from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Todo一覧の取得
@app.get("/todos")
def read_todos():
    return [
        {"id": 1, "title": "買い物に行く", "completed": False},
        {"id": 2, "title": "宿題をする", "completed": True}
    ]

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