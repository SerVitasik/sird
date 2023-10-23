"use client";
import styles from './NewNewsForm.module.scss';
import { useRef } from 'react';
import Title from './ui/Title';

const EditNewsForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const dateInputRef = useRef();
    const textInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredText= textInputRef.current.value;
  
      const newsData = {
        title: enteredTitle,
        image: enteredImage,
        date: enteredDate,
        text: enteredText,
      };
  
      props.onEditNews(newsData);
    }

    console.log(props.prevNewsData);
    
  
    return (
        <>
        <Title isCenter>Редагування новини</Title>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовко новини</label>
            <input value={props.prevNewsData.news.title} type='text' id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' id='image' value={props.prevNewsData.news.image} ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Дата публікації</label>
            <input type='date' id='date' value={props.prevNewsData.news.date} ref={dateInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст новини</label>
            <textarea
              id='text'
              rows='5'
              ref={textInputRef}
              value={props.prevNewsData.news.text}
            ></textarea>
          </div>
            <button className={styles.button}>Додати новину</button>
        </form>
        </>
    );
};

export default EditNewsForm;