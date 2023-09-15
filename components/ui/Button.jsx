import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({children, link}) => {
    return (
        <Link href={link} className={styles.Button}>{children}</Link>
    );
};

export default Button;