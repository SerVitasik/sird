import styles from "./TeacherItem.module.scss";

const TeacherItem = ({teacher}) => {
    return <tr className={styles.tr}>
    <td>{teacher.fullname}</td>
    <td>{teacher.birthdayDate}</td>
    <td>{teacher.higherEducation}</td>
    <td>{teacher.speciality}</td>
    <td>{teacher.qualification}</td>
    <td>{teacher.degree}</td>
    <td>{teacher.academicStatus}</td>
    <td>{teacher.job}</td>
    <td>{teacher.position}</td>
    <td>{teacher.professionalInterests}</td>
    <td>{teacher.topics}</td>
    <td>{teacher.phoneNumber}</td>
    <td>{teacher.email}</td>
    <td>{teacher.facebook}</td>
  </tr>
}

export default TeacherItem;