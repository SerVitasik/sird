"use client";
import styles from './EditAnnouncementsForm.module.scss';
import { useState } from 'react';
import Title from '../ui/Title';
import { useRouter } from 'next/navigation';

const EditAnnouncementsForm = (props) => {
    console.log(props.announce);
  const router = useRouter();
    const [title, setTitle] = useState(props.announce.announcements.title);
    const [text, setText] = useState(props.announce.announcements.text);
    const [date, setDate] = useState(props.announce.announcements.date)

    

    function submitHandler(event) {
      event.preventDefault();

      const announceData = {
        title,
        date,
        text,
      };

      editAnnouncementsHandler(announceData);

    }

    async function editAnnouncementsHandler(enteredAnnounceData) {
      try {
        const response = await fetch(`/api/announcements/${props.announce.announcements._id}`, {
          method: "PUT",
          body: JSON.stringify(enteredAnnounceData),
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
        <Title isCenter>Редагування анонсу</Title>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок анонсу</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type='text' id='title'/>
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Дата публікації</label>
            <input type='date' onChange={e => setDate(e.target.value)} id='date' value={date} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст новини</label>
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

export default EditAnnouncementsForm;