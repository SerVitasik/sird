import Navigation from "./Navigation";
import styles from "../styles/components/Header.module.scss";
import Image from "next/image";
import Container from "./ui/Container";
import Link from "next/link";

const Header = () => {
    return (
        <Container>
            <header className={styles.Header}>
            <Link href="/" className={styles.Logo}><Image src="/header/Logo.svg"
              alt="Logo"
              width={286}
              height={219}
              priority/>
            </Link>
            <Navigation />
        </header>
        </Container>
        
    );
}

export default Header;