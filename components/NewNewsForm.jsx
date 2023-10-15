"use client";
import styles from './NewNewsForm.module.scss';
import { useRef } from 'react';

const NewNewsForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const dateInputRef = useRef();
    const descriptionInputRef = useRef();
  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
  
      const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredDate,
        description: enteredDescription,
      };
  
      props.onAddMeetup(meetupData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='image'>Meetup Image</label>
            <input type='url' required id='image' ref={imageInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='address'>Date</label>
            <input type='date' required id='date' ref={dateInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={styles.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
    );
};

export default NewNewsForm;