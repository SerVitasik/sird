"use client";
import styles from './NewProductsForm.module.scss';
import { useState } from 'react';
import Title from '../ui/Title';
import { useRouter } from 'next/navigation';

const EditProductsForm = (props) => {
  const router = useRouter();
    const [title, setTitle] = useState(props.products.products.title);
    const [image, setImage] = useState(props.products.products.image);
    const [text, setText] = useState(props.products.products.text);

    

    function submitHandler(event) {
      event.preventDefault();

      const productsData = {
        title,
        image,
        text,
      };

      editProductsHandler(productsData);

    }

    async function editProductsHandler(enteredProductsData) {
      try {
        const response = await fetch(`/api/products/${props.products.products._id}`, {
          method: "PUT",
          body: JSON.stringify(enteredProductsData),
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
        <Title isCenter>Редагування</Title>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Заголовок</label>
            <input value={title} onChange={e => setTitle(e.target.value)} type='text' id='title'/>
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Посилання на зображення</label>
            <input type='text' onChange={e => setImage(e.target.value)} id='image' value={image}/>
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Текст</label>
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

export default EditProductsForm;