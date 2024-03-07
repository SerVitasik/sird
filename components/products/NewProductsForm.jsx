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
          <span>Додавати зображення потрібно посиланнями ось посилання на сайт, який перетворює https://postimages.org/uk/ Треба обирати пряме посилання. </span>
          <div className={styles.control}>
            <label htmlFor='title'>Анотація</label>
            <textarea maxLength="200" type='text' required id='title'  rows='5' ref={titleInputRef}>
            </textarea>
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input  type='text' required id='image' ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Посилання на документ</label>
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