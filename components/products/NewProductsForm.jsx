"use client";
import styles from './NewProductsForm.module.scss';
import { useRef } from 'react';

const NewProductsForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const textInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredText= textInputRef.current.value;
  
      const productsData = {
        title: enteredTitle,
        image: enteredImage,
        text: enteredText,
      };
  
      props.onAddProducts(productsData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' required id='image' ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст</label>
            <textarea
              id='text'
              required
              rows='5'
              ref={textInputRef}
            ></textarea>
          </div>
            <button className={styles.button}>Додати</button>
        </form>
    );
};

export default NewProductsForm;