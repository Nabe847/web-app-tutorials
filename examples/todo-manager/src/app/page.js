import style from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>はじめてのTodoアプリ</h1>
      <p className={style.box}>やることリストを簡単に管理できます</p>
      <Link href="/todos">
        <button className={style.button}>始める</button>
      </Link>
    </div>
  );
}
