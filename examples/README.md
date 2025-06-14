# Webアプリケーションサンプル

このディレクトリには、Next.jsとFastAPIを使用したTodoアプリケーションのサンプルが含まれています。

## バックエンド（FastAPI）の起動

1. 仮想環境の作成と有効化:

Macの場合:
```bash
cd todo-api
python -m venv venv
source venv/bin/activate
```

Windowsの場合:
```bash
cd todo-api
python -m venv venv
.\venv\Scripts\activate
```

2. 必要なパッケージのインストール:
```bash
pip install -r requirements.txt
```

3. サーバーの起動:
```bash
uvicorn app.main:app --reload
```

バックエンドサーバーは`http://localhost:8000`で起動します。

## フロントエンド（Next.js）の起動

1. 必要なパッケージのインストール:
```bash
cd todo-manager
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

フロントエンドサーバーは`http://localhost:3000`で起動します。 