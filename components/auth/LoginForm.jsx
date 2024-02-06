"use client";
import styles from './LoginForm.module.scss';
import { useRef, useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { login } from '@/store';
import { useDispatch } from 'react-redux';
const LoginForm = () => {
    const [error, setError] = useState("");
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const router = useRouter();
    const dispatch = useDispatch();
  
    async function loginHandler(enteredUserData) {
      try {
        const res = await signIn('credentials', {
          username: enteredUserData.username,
          password: enteredUserData.password,
          redirect: false
        });
        if (res.error) {
         setError("Incorrect password");
         return;
        }
        dispatch(login());
       router.push("/"); 
      } catch (error) {  
        console.error(error);
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
  
      loginHandler(userData);
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
            <button className={styles.button}>Увійти</button>
        </form>
    );
};

export default LoginForm;