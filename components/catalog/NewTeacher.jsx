import { useRef } from "react";
import { useState } from "react";
import styles from "./NewTeacher.module.scss";

const NewTeacher = (props) => {
  const [error, setError] = useState("");

  const fullnameRef = useRef(null);
  const birthdayRef = useRef(null);
  const higherEducationRef = useRef(null);
  const specialityRef = useRef(null);
  const qualificationRef = useRef(null);
  const degreeRef = useRef(null);
  const academicStatusRef = useRef(null);
  const jobRef = useRef(null);
  const positionRef = useRef(null);
  const professionalInterestsRef = useRef(null);
  const topicsRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const facebookRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !fullnameRef.current ||
      fullnameRef.current.value.trim().length === 0 ||
      !birthdayRef.current ||
      birthdayRef.current.value.trim().length === 0 ||
      !higherEducationRef.current ||
      higherEducationRef.current.value.trim().length === 0 ||
      !specialityRef.current ||
      specialityRef.current.value.trim().length === 0 ||
      !qualificationRef.current ||
      qualificationRef.current.value.trim().length === 0 ||
      !degreeRef.current ||
      degreeRef.current.value.trim().length === 0 ||
      !academicStatusRef.current ||
      academicStatusRef.current.value.trim().length === 0 ||
      !jobRef.current ||
      jobRef.current.value.trim().length === 0 ||
      !positionRef.current ||
      positionRef.current.value.trim().length === 0 ||
      !professionalInterestsRef.current ||
      professionalInterestsRef.current.value.trim().length === 0 ||
      !topicsRef.current ||
      topicsRef.current.value.trim().length === 0 ||
      !phoneNumberRef.current ||
      phoneNumberRef.current.value.trim().length === 0 ||
      !emailRef.current ||
      emailRef.current.value.trim().length === 0 ||
      !facebookRef.current ||
      facebookRef.current.value.trim().length === 0
    ) {
      setError("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    const teacherInfo = {
      fullname: fullnameRef.current.value,
      birthdayDate: birthdayRef.current.value,
      higherEducation: higherEducationRef.current.value,
      speciality: specialityRef.current.value,
      qualification: qualificationRef.current.value,
      degree: degreeRef.current.value,
      academicStatus: academicStatusRef.current.value,
      job: jobRef.current.value,
      position: positionRef.current.value,
      professionalInterests: professionalInterestsRef.current.value,
      topics: topicsRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
      facebook: facebookRef.current.value,
    };
    props.onAddTeacher(teacherInfo);
    clearFormFields();
  };

  const clearFormFields = () => {
    if (
      fullnameRef.current &&
      birthdayRef.current &&
      higherEducationRef.current &&
      specialityRef.current &&
      qualificationRef.current &&
      degreeRef.current &&
      academicStatusRef.current &&
      jobRef.current &&
      positionRef.current &&
      professionalInterestsRef.current &&
      topicsRef.current &&
      phoneNumberRef.current &&
      emailRef.current &&
      facebookRef.current
    ) {
      fullnameRef.current.value = "";
      birthdayRef.current.value = "";
      higherEducationRef.current.value = "";
      specialityRef.current.value = "";
      qualificationRef.current.value = "";
      degreeRef.current.value = "";
      academicStatusRef.current.value = "";
      jobRef.current.value = "";
      positionRef.current.value = "";
      professionalInterestsRef.current.value = "";
      topicsRef.current.value = "";
      phoneNumberRef.current.value = "";
      emailRef.current.value = "";
      facebookRef.current.value = "";
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="name">ПІБ</label>
        <input type="text" id="name" ref={fullnameRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="birthday">
          Число, місяць і рік народження (в форматі дд.мм.рр)
        </label>
        <input type="text" id="birthday" ref={birthdayRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="education">
          Який вищий навчальний заклад або заклади закінчив/ла?
        </label>
        <input type="text" id="education" ref={higherEducationRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="speciality">
          Спеціальність за дипломом (дипломами)
        </label>
        <input type="text" id="speciality" ref={specialityRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="level">Освітньо-кваліфікаційний рівень</label>
        <input type="text" id="level" ref={qualificationRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="degree">Науковий ступінь (з назвою галузі науки)</label>
        <input type="text" id="degree" ref={degreeRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="status">Вчене звання</label>
        <input type="text" id="status" ref={academicStatusRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="job">Місце роботи</label>
        <input type="text" id="job" ref={jobRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="position">Посада</label>
        <input type="text" id="position" ref={positionRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="interests">Сфера професійних інтересів</label>
        <input type="text" id="interests" ref={professionalInterestsRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="topics">
          Які теми читаєте (з анотаціями в 3 – 5 речень)
        </label>
        <input type="text" id="topics" ref={topicsRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="phone">Мобільний телефон</label>
        <input type="text" id="phone" ref={phoneNumberRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="email">Електронна пошта</label>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="facebook">Персональна сторінка в мережі фейсбук</label>
        <input type="text" id="facebook" ref={facebookRef} />
      </div>
      <button className={styles.button} onClick={submitHandler}>
        Додати викладача
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default NewTeacher;
