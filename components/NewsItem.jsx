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
  return (
    <li className={styles.Item}>
      <h3 className={styles.Title}>{title}</h3>
      <Image
        className={styles.Image}
        src={image}
        alt="News item"
        width={413}
        height={235}
        priority
      />
      <p className={styles.Text}>{text}</p>
      <div className={styles.Button}>
        <Button clickHandler={showDetailsPage}>Новина</Button>
      </div>
      <div className={styles.Date}>{formatedDate}</div>
    </li>
  );
};

export default NewsItem;
