import styles from "./Search.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Search = ({
  handleDateChange,
  filteredDates,
  searchTerm,
  handleSearchChange,
  isProject,
}) => {
  const session = useSession();
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
      {session.status === "authenticated" && (
        <Link
          href={isProject ? "/projects/new" : "/news/new"}
          className={styles.button}
        >
          Додати
        </Link>
      )}
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
