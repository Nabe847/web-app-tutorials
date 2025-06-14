# Webアプリケーションサンプル

このディレクトリには、Next.jsとFastAPIを使用したTodoアプリケーションのサンプルが含まれています。

## バックエンド（FastAPI）の起動

1. 必要なパッケージのインストール:
```bash
cd todo-api
pip install -r requirements.txt
```

2. サーバーの起動:
```bash
uvicorn app.main:app --reload
```

バックエンドサーバーは`http://localhost:8000`で起動します。

## フロントエンド（Next.js）の起動

1. 必要なパッケージのインストール:
```bash
cd todo-app
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

フロントエンドサーバーは`http://localhost:3000`で起動します。 