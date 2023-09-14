import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/NewsItem.module.scss";
import Button from "./ui/Button";

const NewsItem = ({title, text, image, date}) => {
    const formatedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() % 100}`;

    return (
        <li className={styles.Item}>
            <h3 className={styles.Title}>{title}</h3>
            <Image className={styles.Image} src={image}
              alt="News item"
              width={413}
              height={235}
              priority/>
            <p className={styles.Text}>{text}</p>
            <div className={styles.Button}>
                <Button link='news'>Новина</Button>
            </div>
            <div className={styles.Date}>{formatedDate}</div>
        </li>
    );
}

export default NewsItem;