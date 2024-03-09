import { useState } from "react";
import TeacherItem from "./TeacherItem";
import styles from "./Teachers.module.scss";

const Teachers = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(props.teachers);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      const filteredByContent = props.teachers.filter((item) => {
        return (
          item.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.birthdayDate
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.higherEducation
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.speciality
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.qualification
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.academicStatus
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.job.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.position.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.professionalInterests
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.topics.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.phoneNumber
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.facebook.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredTeachers(filteredByContent);
    }, 300);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Пошук"
        className={styles.input}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ПІБ</td>
            <td>Число, місяць і рік народження (в форматі дд.мм.рр)</td>
            <td>Який вищий навчальний заклад або заклади закінчив/ла?</td>
            <td>Спеціальність за дипломом (дипломами)</td>
            <td>Освітньо-кваліфікаційний рівень</td>
            <td>Науковий ступінь (з назвою галузі науки)</td>
            <td>Вчене звання</td>
            <td>Місце роботи</td>
            <td>Посада</td>
            <td>Сфера професійних інтересів</td>
            <td>Які теми читаєте (з анотаціями в 3 – 5 речень)</td>
            <td>Мобільний телефон</td>
            <td>Електронна пошта</td>
            <td>Персональна сторінка в мережі фейсбук</td>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers &&
            filteredTeachers.map((teacher) => (
              <TeacherItem key={teacher._id} teacher={teacher} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Teachers;
