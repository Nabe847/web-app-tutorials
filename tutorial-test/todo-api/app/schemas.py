from pydantic import BaseModel

# 1. 基本となるTodoスキーマ
class TodoBase(BaseModel):
    title: str

# 2. Todo作成用のスキーマ
class TodoCreate(TodoBase):
    pass

# 3. Todoレスポンス用のスキーマ
class Todo(TodoBase):
    id: int
    completed: bool

    class Config:
        from_attributes = True 