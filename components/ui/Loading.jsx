import styles from "./Loading.module.scss";
import Title from "./Title";

const Loading = () => {
  return (
    <div  className={styles.loading}>
      <Title isCenter> Loading...</Title>
    </div>
  );
};

export default Loading;