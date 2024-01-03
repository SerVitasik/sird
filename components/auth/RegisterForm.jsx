"use client";
import styles from './RegisterForm.module.scss';
import { useRef, useState } from 'react';
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [error, setError] = useState("");
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const router = useRouter();
    async function addUserHandler(enteredUserData) {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(enteredUserData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message);
          throw new Error(errorData.message); 
        }
        router.replace("/");
      } catch (error) {  
        console.error("An error occurred:", error);
      }
    }

  
    function submitHandler(event) {
      event.preventDefault();
  
      const enteredUsername = usernameInputRef.current.value;

      const enteredPassword= passwordInputRef.current.value;
      const userData = {
        username: enteredUsername,
        password: enteredPassword,
      };
  
      addUserHandler(userData);
    }
  
    return (
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor='login'>Логін</label>
            <input type='text' required id='username' ref={usernameInputRef} />
          </div>
         
          <div className={styles.control}>
            <label htmlFor='password'>Пароль</label>
            <input type='password' required id='password' ref={passwordInputRef} />
          </div>
          {error && <p className={styles.error}>{error}</p>}
            <button className={styles.button}>Зареєструватися</button>
        </form>
    );
};

export default RegisterForm;