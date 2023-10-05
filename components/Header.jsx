import Navigation from "./Navigation";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Layout from "./ui/Layout";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}><Image src="/header/Logo.svg"
            alt="Logo"
            width={286}
            height={219}
            priority/>
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;