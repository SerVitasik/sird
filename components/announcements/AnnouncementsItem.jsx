import styles from "./AnnouncementsList.module.scss";
import Image from "next/image";
import Title from "./ui/Title";

const AnnouncementsItem = ({title, text, date}) => {
    return (
       <li>
        <h4>{title}</h4>
        <p>{text}</p>
        <div>{date}</div>
       </li>
    );
}

export default AnnouncementsItem;