"use client";
import styles from './NewAnnouncementsForm.module.scss';
import { useRef } from 'react';

const NewAnnouncementsForm = (props) => {
    const titleInputRef = useRef();
    const dateInputRef = useRef();
    const textInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredText= textInputRef.current.value;
  
      const announcementsData = {
        title: enteredTitle,
        date: enteredDate,
        text: enteredText,
      };
  
      props.onAddAnnouncements(announcementsData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок анонсу</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Дата публікації</label>
            <input type='date' required id='date' ref={dateInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст анонсу</label>
            <textarea
              id='text'
              required
              rows='5'
              ref={textInputRef}
            ></textarea>
          </div>
            <button className={styles.button}>Додати анонс</button>
        </form>
    );
};

export default NewAnnouncementsForm;