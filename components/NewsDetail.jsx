"use client";
import Image from "next/image";
import Title from "./ui/Title";
import styles from "./NewsDetail.module.scss";

const NewsDetail = (props) => {

  const newDate = new Date(props.date);
  const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${
    newDate.getFullYear() % 100
  }`;

  

  return (
    <section className={styles.news}>
      <Title isCenter>{props.news.title}</Title>
      <div className={styles.image} >
        <Image style={{objectFit: "contain", height: "100%", width: "100%"}} width={1300} height={543} src={props.news.image} alt="News image"/>
      </div>
      
      <div className={styles.date}>{formatedDate}</div>
      <p className={styles.text}>{props.news.text}</p>
  </section>
  );
};

export default NewsDetail;
