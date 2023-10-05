import styles from "./Button.module.scss";

const Button = ({ children, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.Button}>
      {children}
    </button>
  );
};

export default Button;
