import TeacherItem from "./TeacherItem";
import styles from "./Teachers.module.scss";

const Teachers = (props) => {
    return <table className={styles.table}>
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
    {props.teachers && props.teachers.map((teacher) => (
       <TeacherItem key={teacher._id} teacher={teacher}/>
      ))}
    </tbody>
    
    </table>
}

export default Teachers;