import Image from "next/image";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <h5>Ми в соціальних мережах</h5>
        <a href="">YouTube</a>
        <a href="">Facebook</a>
      </div>
      <div className={styles.logo}>
        <Image src="/footer/logo.svg"
                alt="logo"
                width={222}
                height={182}
                priority/>
      </div>
      <div className={styles.contact}>
        <h5>Контактна інформація</h5>
        <a href="tel:+380677979946">+38067(797)9946</a>
        <a className={styles.email} href="mailto:siverian@gmail.com">Email: siverian@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
