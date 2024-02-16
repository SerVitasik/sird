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
          <span>Додави зображення потрібно посиланнями ось посилання на сайт, який перетворює https://postimages.org/ru/ Треба обирати пряме посилання. </span>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок</label>
            <textarea type='text' required id='title'  rows='5' ref={titleInputRef}>
            </textarea>
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' required id='image' ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст</label>
            <input
              id='text'
              required
              ref={textInputRef}
            />
          </div>
            <button className={styles.button}>Додати</button>
        </form>
    );
};

export default NewProductsForm;