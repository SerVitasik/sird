import AnnouncementsItem from "./AnnouncementsItem";
import styles from "./AnnouncementsList.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

const AnnouncementsList = ({announcements}) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const announcementsWithCorrectDate = announcements.map((item)=> {
        return {...item, date: new Date(item.date)}
      });
    
    return (
        <>
            {isAuthenticated && <Link href="/announcements/new" className={styles.button}>Додати анонс</Link>}
            <ul className={styles.list}>
            {announcementsWithCorrectDate.sort((announceA, announceB) => announceB.date - announceA.date).map((item) => <AnnouncementsItem key={item._id} id={item._id} title={item.title} date={item.date} text={item.text} />)}
            </ul>
        </>
    );
}

export default AnnouncementsList;