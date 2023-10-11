"use client";
import Image from "next/image";
import styles from "./NewsItem.module.scss";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const NewsItem = ({ id, title, text, image, date }) => {
  const formatedDate = `${date.getDate()}.${date.getMonth() + 1}.${
    date.getFullYear() % 100
  }`;
  const router = useRouter();
  function showDetailsPage() {
    router.push("/news/" + id);
  }

  const formatedText = text.length >= 276 ? text.slice(0, 273) + "..." : text.slice(0, text.length);
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      
      <Image
        className={styles.image}
        src={image}
        alt="News item"
        width={413}
        height={235}
        priority
      />
      <p className={styles.text}>{formatedText}</p>
      <div className={styles.button}>
        <Button clickHandler={showDetailsPage}>Новина</Button>
      </div>
      <div className={styles.date}>{formatedDate}</div>
    </li>
  );
};

export default NewsItem;
