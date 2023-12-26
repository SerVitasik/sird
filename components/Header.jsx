import Navigation from "./Navigation";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const {data: session, status} = useSession();
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}><Image src="/header/Logo.svg"
            alt="Logo"
            width={286}
            height={219}
            priority/>
            </Link>
            <Navigation />
            {status === "authenticated" && <p>{session.user.name}</p>}
            <button onClick={() => signOut()}>Sign Out</button>
        </header>
    );
}

export default Header;