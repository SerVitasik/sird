"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
            <a href="https://drive.google.com/drive/folders/1saBrI1aeGq2ZTooA7e-l5g0ZVAY-kzOg?usp=sharing">Звіти</a>
          </li>
          <li className={styles.link}>
            <Link href="/aboutUs">Про нас</Link>
          </li>
          <li className={styles.link}>
            <a href="https://drive.google.com/drive/folders/1xygqczH2wYCE9XpnIg-T3QexID0sO67g?usp=drive_link">Проєкти</a>
          </li>
          <li className={styles.link}>
            <Link href="/announcements">Анонси</Link>
          </li>
          {isAuthenticated &&  <button className={styles.btn} onClick={() => signOut()}>Вийти</button>}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
