"use client";
import Image from "next/image";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.social}>
          <h5>Ми в соціальних мережах</h5>
          <ul className={styles.list}>
            <li><a href="https://www.youtube.com/@siverird"><Image src="/footer/youtube.svg"
                  alt="logo"
                  width={25}
                  height={22}/>YouTube</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100064470768944"><Image src="/footer/facebook.svg"
                  alt="logo"
                  width={25}
                  height={25}/>Facebook</a></li>
          </ul>
        </div>
        <div className={styles.logo}>
          <Image src="/footer/logo.svg"
                  alt="logo"
                  width={222}
                  height={182}/>
        </div>
        <div className={styles.contact}>
          <h5>Контактна інформація</h5>
          <ul className={styles.list}>
            <li><a href="tel:+380677979946"><Image src="/footer/phone.svg"
                  alt="logo"
                  width={20}
                  height={28}/>+38067 7979946</a></li>
            <li><a className={styles.email} href="mailto:siverian@gmail.com">Email: siverian@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
      © 2023        Несанкціоноване копіювання заборонено.
      </div>
    </footer>
  );
};

export default Footer;
