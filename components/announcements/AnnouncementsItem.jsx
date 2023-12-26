import Link from "next/link";
import Image from "next/image";
import styles from "./AnnouncementsItem.module.scss";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const AnnouncementsItem = ({title, text, date, id}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const newDate = new Date(date);
    const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${
      newDate.getFullYear()
      }`;

      const removeNewsHandler = async () => {
        const confirmed = confirm('Ви впевнені, що хочете видалити новину?');
        if (confirmed) {
          console.log(id);
          const response = await fetch(`/api/announcements?id=${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Failed to delete announce');
          }
          router.refresh();
          router.replace('/');
        }
      };

    return (
       <li className={styles.item}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          {isAuthenticated && <div className={styles.actions}>
            <Link href={`/announcements/edit/${id}`}><Image
                        src='/announcements/edit.svg'
                        alt="Edit button"
                        width={20}
                        height={20}
                        /></Link>
            <button><Image  src='/announcements/delete.svg' onClick={removeNewsHandler}  alt="Delete button"
                        width={20}
                        height={20}/></button>
          </div>}
        </div>
        
        <p className={styles.text}>{text}</p>
        <div className={styles.date}>{formatedDate}</div>
       </li>
    );
}

export default AnnouncementsItem;