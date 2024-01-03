import styles from "./Contacts.module.scss";
import Image from "next/image";
import Title from "./ui/Title";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Title className={styles.title}>Контактна інформація</Title>
            <ul className={styles.list}>
            <li><a href="tel:+380677979946"><Image src="/footer/phone.svg"
                  alt="logo"
                  width={30}
                  height={38}/>+38067 7979946</a></li>
            <li><a className={styles.email} href="mailto:siverian@gmail.com">Email: siverian@gmail.com</a></li>
            <li><a href="https://www.youtube.com/@siverird"><Image src="/footer/youtube.svg"
                  alt="logo"
                  width={35}
                  height={32}/>YouTube</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100064470768944"><Image src="/footer/facebook.svg"
                  alt="logo"
                  width={35}
                  height={35}/>Facebook</a></li>
          </ul>
        </section>
    );
}

export default Contacts;