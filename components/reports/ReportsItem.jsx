import Image from "next/image";
import styles from "./ReportsItem.module.scss";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const ReportsItem = ({title, text, id}) => {
  const session = useSession();
  const router = useRouter();

      const removeNewsHandler = async () => {
        const confirmed = confirm('Ви впевнені, що хочете видалити звіт?');
        if (confirmed) {
          const response = await fetch(`/api/reports?id=${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Failed to delete report');
          }
          router.refresh();
          router.replace("/");   
        }
      };

    return (
       <li className={styles.item}>
        <div className={styles.content}>
          <a href={text} className={styles.title}>{title}</a>
          {session.status === "authenticated" && <div className={styles.actions}>
            <button><Image  src='/announcements/delete.svg' onClick={removeNewsHandler}  alt="Delete button"
                        width={20}
                        height={20}/></button>
          </div>}
        </div>
       </li>
    );
}

export default ReportsItem;