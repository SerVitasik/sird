import { useSession } from "next-auth/react";
import ReportsItem from "./ReportsItem";
import styles from "./ReportsList.module.scss";
import Link from "next/link";

const ReportsList = ({reports}) => {
    const session = useSession();
    return (
        <>
            {session.status === "authenticated" && <Link href="/reports/new" className={styles.button}>Додати звіт</Link>}
            <ul className={styles.list}>
            {reports.map((item) => <ReportsItem key={item._id} id={item._id} title={item.title} text={item.text} />)}
            </ul>
        </>
    );
}

export default ReportsList;