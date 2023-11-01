import styles from "./AnnouncementsList.module.scss";


const AnnouncementsList = () => {
    return (
        <ul className={styles.list}>
           <AnnouncementsItem />
        </ul>
    );
}

export default AnnouncementsList;