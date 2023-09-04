import styles from "@/styles/components/Container.module.scss";

const Container = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}

export default Container;