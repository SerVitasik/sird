"use client";
import styles from './NewNewsForm.module.scss';
import { useRef } from 'react';

const NewNewsForm = (props) => {
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
  
      props.onAddNews(newsData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <span>Додавати зображення потрібно посиланнями ось посилання на сайт, який перетворює https://postimages.org/ru/ Треба обирати пряме посилання. </span>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок новини</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' required id='image' ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Дата публікації</label>
            <input type='date' required id='date' ref={dateInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст новини</label>
            <textarea
              id='text'
              required
              rows='5'
              ref={textInputRef}
            ></textarea>
          </div>
            <button className={styles.button}>Додати новину</button>
        </form>
    );
};

export default NewNewsForm;