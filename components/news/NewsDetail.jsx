"use client";
import styles from "./NewsDetail.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NewsDetail = (props) => {
  const session = useSession();
  const router = useRouter();
  const newDate = new Date(props.news.news.date);
  const monthArray = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Cерпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня']
  const formatedDate = `${newDate.getDate()} ${monthArray[newDate.getMonth()]} ${
    newDate.getFullYear()
  }`;

  const removeNewsHandler = async () => {
    const confirmed = confirm('Ви впевнені, що хочете видалити новину?');
    if (confirmed) {
      const response = await fetch(`/api/news?id=${props.news.news._id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete news');
      }
      router.refresh();
      router.replace('/');
    }
  };

  return (
    <>
    {session.status === "authenticated" && <div className={styles.actions}>
        <button className={styles.button} onClick={removeNewsHandler}>Видалити новину</button>
        <Link className={styles.button} href={`/news/edit/${props.news.news._id}`}>Редагувати новину</Link>
      </div>}
      <section className={styles.news}>
        <div className={styles.image} >
          <img src={props.news.news.image} alt="News image"/>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{props.news.news.title}</h3>
          <div className={styles.date}>Дата публікації <p>{formatedDate}</p></div>
          <p className={styles.text}>{props.news.news.text}</p>
        </div>
  </section>
    </>
    
  );
};

export default NewsDetail;
