import styles from "./TeacherItem.module.scss";
import { useRouter } from "next/navigation";



const TeacherItem = ({teacher}) => {

  const router = useRouter();

  const removeTeacherHandler = async () => {
    const confirmed = confirm('Ви впевнені, що хочете видалити інформацію про вчителя?');
    if (confirmed) {
      const response = await fetch(`/api/catalog?id=${teacher._id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete announce');
      }
      router.refresh();
      router.replace('/');
    }
  };
  


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
    <td><button onClick={removeTeacherHandler}>Видалити</button></td>
  </tr>
}

export default TeacherItem;