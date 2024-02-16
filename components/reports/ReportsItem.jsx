import Image from "next/image";
import styles from "./ReportsItem.module.scss";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const ReportsItem = ({title, text, id}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

      const removeNewsHandler = async () => {
        const confirmed = confirm('Ви впевнені, що хочете видалити report?');
        if (confirmed) {
          const response = await fetch(`/api/reports?id=${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Failed to delete report');
          }
          router.refresh();
        }
      };

    return (
       <li className={styles.item}>
        <div className={styles.content}>
          <a href={text} className={styles.title}>{title}</a>
          {isAuthenticated && <div className={styles.actions}>
            <button><Image  src='/announcements/delete.svg' onClick={removeNewsHandler}  alt="Delete button"
                        width={20}
                        height={20}/></button>
          </div>}
        </div>
       </li>
    );
}

export default ReportsItem;