import { useSession } from "next-auth/react";
import Title from "../ui/Title";
import AnnouncementsItem from "./AnnouncementsItem";
import styles from "./AnnouncementsList.module.scss";
import Link from "next/link";

const AnnouncementsList = ({ announcements }) => {
  const session = useSession();
  const announcementsWithCorrectDate = announcements.map((item) => {
    return { ...item, date: new Date(item.date) };
  });

  return (
    <>
      {session.status === "authenticated" && (
        <Link href="/announcements/new" className={styles.button}>
          Додати анонс
        </Link>
      )}
      <ul className={styles.list}>
        {announcementsWithCorrectDate.length !== 0 ? (
          announcementsWithCorrectDate
            .sort((announceA, announceB) => announceB.date - announceA.date)
            .map((item) => (
              <AnnouncementsItem
                key={item._id}
                id={item._id}
                title={item.title}
                date={item.date}
                text={item.text}
              />
            ))
        ) : (
          <Title isCenter>На жаль немає подій найближчим часом</Title>
        )}
      </ul>
    </>
  );
};

export default AnnouncementsList;
