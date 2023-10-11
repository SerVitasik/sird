import Image from "next/image";
import Title from "./ui/Title";
import styles from "./NewsDetail.module.scss";

const NewsDetail = (props) => {

  const formatedDate = `${props.news.date.getDate()}.${props.news.date.getMonth() + 1}.${
    props.news.date.getFullYear()
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
