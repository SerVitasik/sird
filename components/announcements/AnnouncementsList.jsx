import AnnouncementsItem from "./AnnouncementsItem";
import styles from "./AnnouncementsList.module.scss";
import { Announcements } from "@/store/announcements";

const AnnouncementsList = () => {
    return (
        <ul className={styles.list}>
           {Announcements.map((item) => <AnnouncementsItem key={item.id} title={item.title} date={item.date} text={item.text} />)}
        </ul>
    );
}

export default AnnouncementsList;