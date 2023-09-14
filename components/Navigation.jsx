import Link from "next/link";
import styles from "../styles/components/Navigation.module.scss";
const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.List}>
                <li className={styles.Link}><Link href="/">Головна</Link></li>
                <li className={styles.Link}><Link href="/news">Новини</Link></li>
                <li className={styles.Link}><Link href="/news">Контакти</Link></li>
                <li className={styles.Link}><Link href="/news">Звіти</Link></li>
                <li className={styles.Link}><Link href="/news">Розробки</Link></li>
                <li className={styles.Link}><Link href="/news">Про нас</Link></li>
                <li className={styles.Link}><Link href="/news">Проєкти</Link></li>
               
            </ul>
        </nav>
    );
};

export default Navigation;