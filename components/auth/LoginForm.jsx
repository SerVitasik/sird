"use client";
import styles from './LoginForm.module.scss';
import { useRef } from 'react';

const LoginForm = (props) => {
    const titleInputRef = useRef();
    const textInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;

      const enteredText= textInputRef.current.value;
  
      const newsData = {
        title: enteredTitle,
        text: enteredText,
      };
  
      props.onAddNews(newsData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Логін</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
         
          <div className={styles.control}>
            <label htmlFor='address'>Пароль</label>
            <input type='password' required id='date' ref={textInputRef} />
          </div>
            <button className={styles.button}>Увійти</button>
        </form>
    );
};

export default LoginForm;