"use client";
import styles from "./ProjectsItem.module.scss";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const ProjectsItem = ({ id, title, text, image, date }) => {
  const newDate = new Date(date);
  const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${
    newDate.getFullYear() % 100
  }`;
  const router = useRouter();
  function showDetailsPage() {
    router.push("/projects/" + id);
  }

  const formatedText =
    text.length >= 276
      ? text.slice(0, 273) + "..."
      : text.slice(0, text.length);
  return (
    <li key={id} className={styles.item}>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>

      <img
        className={styles.image}
        src={image}
        alt="Projects item"
        width={413}
        height={235}
      />
      <p className={styles.text}>{formatedText}</p>
      <div className={styles.button}>
        <Button clickHandler={showDetailsPage}>Детальніше</Button>
      </div>
      <div className={styles.date}>{formatedDate}</div>
    </li>
  );
};

export default ProjectsItem;
