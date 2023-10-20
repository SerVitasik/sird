import styles from "./Search.module.scss";
import Link from "next/link";

const Search = ({ handleDateChange, filteredDates, searchTerm, handleSearchChange }) => {
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
    <Link href="/news/new" className={styles.button}>Додати новину</Link>
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
