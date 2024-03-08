"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const session = useSession();
  const menuHandler = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { left: "0" };
      });
    }
  };
  return (
    <div className={styles.navigation}>
      {isOpen ? (
        <div
          onClick={menuHandler}
          className={styles[("button", "button-open")]}
        >
          <span></span>
        </div>
      ) : (
        <div onClick={menuHandler} className={styles.button}>
          <span></span>
        </div>
      )}
      <nav className={styles[("body", "vision")]} style={hideOrShow}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link href="/">Головна</Link>
          </li>
          <li className={styles.link}>
            <Link href="/news">Новини</Link>
          </li>
          <li className={styles.link}>
            <Link href="/contacts">Контакти</Link>
          </li>
          <li className={styles.link}>
            <Link href="/reports">Звіти</Link>
          </li>
          <li className={styles.link}>
            <Link href="/aboutUs">Про нас</Link>
          </li>
          <li className={styles.link}>
            <Link href="/projects">Проєкти</Link>
          </li>
          <li className={styles.link}>
            <Link href="/announcements">Анонси</Link>
          </li>
          <li className={styles.link}>
            <Link href="/products">Продукти</Link>
          </li>
          {session.status === "authenticated" &&  <button className={styles.btn} onClick={() => signOut()}>Вийти</button>}
          {session.status === "authenticated" &&  <li className={styles.link}>
            <Link href="/teachersCatalog">Каталог</Link>
          </li>}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
