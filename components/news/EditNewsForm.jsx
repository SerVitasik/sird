"use client";
import styles from './NewNewsForm.module.scss';
import { useState } from 'react';
import Title from '../ui/Title';
import { useRouter } from 'next/navigation';

const EditNewsForm = (props) => {
  const router = useRouter();
    const [title, setTitle] = useState(props.news.news.title);
    const [image, setImage] = useState(props.news.news.image);
    const [text, setText] = useState(props.news.news.text);
    const [date, setDate] = useState(props.news.news.date)

    

    function submitHandler(event) {
      event.preventDefault();

      const newsData = {
        title,
        image,
        date,
        text,
      };

      editNewsHandler(newsData);

    }

    async function editNewsHandler(enteredNewsData) {
      try {
        const response = await fetch(`/api/news/${props.news.news._id}`, {
          method: "PUT",
          body: JSON.stringify(enteredNewsData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message); 
        }
        router.replace("/");
      } catch (error) {  
        console.error("An error occurred:", error);
      }
    }
  
  
    return (
        <>
        <Title isCenter>Редагування новини</Title>
        <span>Додави зображення потрібно посиланнями ось посилання на сайт, який перетворює https://postimages.org/ru/ Треба обирати пряме посилання. </span>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок новини</label>
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

export default EditNewsForm;