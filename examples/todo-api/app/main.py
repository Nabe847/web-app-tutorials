from fastapi import FastAPI

# 1. FastAPIアプリケーションの作成
app = FastAPI()

# 2. Todo一覧を取得するAPIの定義
@app.get("/todos")
def read_todos():
    return [
        {"id": 1, "title": "買い物に行く", "completed": False},
        {"id": 2, "title": "宿題をする", "completed": True}
    ]