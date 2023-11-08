"use client";
import Image from "next/image";
import Title from "./ui/Title";
import styles from "./NewsDetail.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NewsDetail = (props) => {
  const router = useRouter();
  const newDate = new Date(props.news.news.date);
  const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${
    newDate.getFullYear() % 100
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
    <section className={styles.news}>
      <Title isCenter>{props.news.news.title}</Title>
      <div className={styles.actions}>
        <button className={styles.button} onClick={removeNewsHandler}>Видалити новину</button>
        <Link className={styles.button} href={`/news/edit/${props.news.news._id}`}>Редагувати новину</Link>
      </div>
      <div className={styles.image} >
        <img style={{objectFit: "contain", height: "100%", width: "100%"}} src={props.news.news.image} alt="News image"/>
      </div>
      
      <div className={styles.date}>{formatedDate}</div>
      <p className={styles.text}>{props.news.news.text}</p>
  </section>
  );
};

export default NewsDetail;
