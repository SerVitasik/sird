import Link from "next/link";
import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.List}>
        <li className={styles.Link}>
          <Link href="/">Головна</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/news">Новини</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/reports">Звіти</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/developments">Розробки</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/aboutUs">Про нас</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/projects">Проєкти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
