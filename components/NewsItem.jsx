import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/NewsItem.module.scss";

const NewsItem = ({key, title, text, image, date}) => {
    return (
        <li key={key} className={styles.Item}>
            <h3 className={styles.Title}>{title}</h3>
            <Image className={styles.Image} src={image}
              alt="News item"
              width={413}
              height={235}
              priority/>
            <p className={styles.Text}>{text}</p>
            <div>
                <Link href='/'/>
                {/* <div className={styles.Date}>{date}</div> */}
            </div>
        </li>
    );
}

export default NewsItem;