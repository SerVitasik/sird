import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/NewsItem.module.scss";
import Button from "./ui/Button";

const NewsItem = ({title, text, image, date}) => {
    return (
        <li className={styles.Item}>
            <h3 className={styles.Title}>{title}</h3>
            <Image className={styles.Image} src={image}
              alt="News item"
              width={413}
              height={235}
              priority/>
            <p className={styles.Text}>{text}</p>
            <div className={styles.Actions}>
                <Button>Новина</Button>
                <div className={styles.Date}>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</div>
            </div>
        </li>
    );
}

export default NewsItem;