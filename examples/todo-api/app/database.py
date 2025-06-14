from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 1. データベースのURL設定
SQLALCHEMY_DATABASE_URL = "sqlite:///./todo.db"

# 2. データベースエンジンの作成
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# 3. セッションの作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. モデルのベースクラス
Base = declarative_base()

# 5. データベースセッションを取得する関数
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
