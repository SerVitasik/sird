import Link from "next/link";
import Image from "next/image";
import styles from "./AnnouncementsItem.module.scss";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const AnnouncementsItem = ({ title, text, date, id }) => {
  const session = useSession();
  const router = useRouter();

  const newDate = new Date(date);
  const formatedDate = `${newDate.getDate()}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()}`;

  const removeAnnouncementsHandler = async () => {
    const confirmed = confirm("Ви впевнені, що хочете видалити анонс?");
    if (confirmed) {
      const response = await fetch(`/api/announcements?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete announce");
      }
      router.refresh();
      router.replace("/");
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          {session.status === "authenticated" && (
            <div className={styles.actions}>
              <Link href={`/announcements/edit/${id}`}>
                <Image
                  src="/announcements/edit.svg"
                  alt="Edit button"
                  width={20}
                  height={20}
                />
              </Link>
              <button>
                <Image
                  src="/announcements/delete.svg"
                  onClick={removeAnnouncementsHandler}
                  alt="Delete button"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>

        <p className={styles.text}>{text}</p>
        <div className={styles.date}>{formatedDate}</div>
      </div>
    </li>
  );
};

export default AnnouncementsItem;
