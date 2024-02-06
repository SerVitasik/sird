"use client";
import styles from "./ProjectsDetail.module.scss";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

const ProjectsDetail = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const newDate = new Date(props.projects.projects.date);
  const monthArray = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Cерпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня']
  const formatedDate = `${newDate.getDate()} ${monthArray[newDate.getMonth()]} ${
    newDate.getFullYear()
  }`;

  const removeProjectsHandler = async () => {
    const confirmed = confirm('Ви впевнені, що хочете видалити проєкт?');
    if (confirmed) {
      const response = await fetch(`/api/projects?id=${props.projects.projects._id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete projects');
      }
      router.refresh();
      router.replace('/');
    }
  };

  return (
    <>
    {isAuthenticated && <div className={styles.actions}>
        <button className={styles.button} onClick={removeProjectsHandler}>Видалити</button>
        <Link className={styles.button} href={`/projects/edit/${props.projects.projects._id}`}>Редагувати</Link>
      </div>}
      <section className={styles.news}>
        <div className={styles.image} >
          <img src={props.projects.projects.image} alt="Projects image"/>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{props.projects.projects.title}</h3>
          <div className={styles.date}>Дата публікації <p>{formatedDate}</p></div>
          <p className={styles.text}>{props.projects.projects.text}</p>
        </div>
  </section>
    </>
    
  );
};

export default ProjectsDetail;
