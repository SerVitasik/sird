import styles from "./MainComponent.module.scss";

const MainComponent = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainComponent;
