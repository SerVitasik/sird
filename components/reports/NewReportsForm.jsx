"use client";
import styles from './NewReportsForm.module.scss';
import { useRef } from 'react';

const NewReportsForm = (props) => {
    const titleInputRef = useRef();
    const textInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredText= textInputRef.current.value;
  
      const reportsData = {
        title: enteredTitle,
        text: enteredText,
      };
  
      props.onAddReports(reportsData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Посилання на документ</label>
            <input
              id='text'
              required
              ref={textInputRef}
            />
          </div>
            <button className={styles.button}>Додати звіт</button>
        </form>
    );
};

export default NewReportsForm;