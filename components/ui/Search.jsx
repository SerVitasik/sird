import styles from "./Search.module.scss";

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
