import styles from '@/styles/components/Button.module.scss';

const Button = ({children}) => {
    return (
        <button className={styles.Button}>{children}</button>
    );
};

export default Button;