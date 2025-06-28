from fastapi import FastAPI
from . import models
from .database import engine

# データベースのテーブルを作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/todos")
def read_todos():
    return [
        {"id": 1, "title": "買い物に行く", "completed": False},
        {"id": 2, "title": "宿題をする", "completed": True}
    ]