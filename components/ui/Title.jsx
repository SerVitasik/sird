import styles from "./Title.module.scss";

const Title = ({ children, isCenter }) => {
  return (
    <h2
      className={
        isCenter === true ? `${styles.title} ${styles.center}` : styles.title
      }
    >
      {children}
    </h2>
  );
};

export default Title;
