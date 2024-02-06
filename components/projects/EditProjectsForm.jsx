"use client";
import styles from './NewProjectsForm.module.scss';
import { useState } from 'react';
import Title from '../ui/Title';
import { useRouter } from 'next/navigation';

const EditProjectsForm = (props) => {
  const router = useRouter();
    const [title, setTitle] = useState(props.projects.projects.title);
    const [image, setImage] = useState(props.projects.projects.image);
    const [text, setText] = useState(props.projects.projects.text);
    const [date, setDate] = useState(props.projects.projects.date)

    

    function submitHandler(event) {
      event.preventDefault();

      const projectsData = {
        title,
        image,
        date,
        text,
      };

      editProjectsHandler(projectsData);

    }

    async function editProjectsHandler(enteredProjectsData) {
      try {
        const response = await fetch(`/api/projects/${props.projects.projects._id}`, {
          method: "PUT",
          body: JSON.stringify(enteredProjectsData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message); 
        }
    
        const data = await response.json();
        console.log(data);
        router.replace("/");
      } catch (error) {  
        console.error("An error occurred:", error);
      }
    }
  
    return (
        <>
        <Title isCenter>Редагування</Title>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовк</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type='text' id='title'/>
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' onChange={e => setImage(e.target.value)} id='image' value={image}/>
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Дата публікації</label>
            <input type='date' onChange={e => setDate(e.target.value)} id='date' value={date} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст</label>
            <textarea
              id='text'
              rows='5'
              onChange={e => setText(e.target.value)}
              value={text}
            ></textarea>
          </div>
            <button className={styles.button}>Редагувати</button>
        </form>
        </>
    );
};

export default EditProjectsForm;