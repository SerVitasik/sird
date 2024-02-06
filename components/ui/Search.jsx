import styles from "./Search.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";

const Search = ({ handleDateChange, filteredDates, searchTerm, handleSearchChange, isProject }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className={styles.searchBox}>
    <select className={styles.select} onChange={handleDateChange}>
      <option value="">Всі роки</option>
      {filteredDates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
    {isAuthenticated && <Link href={isProject ? "/projects/new" : "/news/new"} className={styles.button}>Додати</Link>}
    <input
      type="text"
      placeholder="Пошук"
      className={styles.input}
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
  );
};

export default Search;
