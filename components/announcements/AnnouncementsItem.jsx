import styles from "./AnnouncementsItem.module.scss";

const AnnouncementsItem = ({title, text, date}) => {

    const formatedDate = `${date.getDate()}.${date.getMonth() + 1}.${
        date.getFullYear()
      }`;

    return (
       <li className={styles.item}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
        <div className={styles.date}>{formatedDate}</div>
       </li>
    );
}

export default AnnouncementsItem;