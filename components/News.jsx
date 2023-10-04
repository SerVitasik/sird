"use client";
import NewsItem from "./NewsItem";
import styles from "./News.module.scss";
import { useState, useEffect } from "react";

const News = ({ news }) => {
  // const page = searchParams['page'] ?? '1';
  // const perPage = searchParams['perPage'] ?? '12';

  // const start = (Number(page) - 1) * Number(perPage);
  // const end = start + Number(perPage);

  // const entries = news.slice(start, end);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredByContentNews, setFilteredNews] = useState(news);
  const [selectedDate, setSelectedDate] = useState("");

  const filteredDateNews =
    selectedDate === ""
      ? news
      : news.filter(
          (item) =>
            item.date.getFullYear().toString() === selectedDate.toString()
        );

  const filtered = filteredByContentNews.filter((element) =>
    filteredDateNews.includes(element)
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    setTimeout(() => {
      const filteredByContent = news.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.text.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredNews(filteredByContent);
    }, 300);
  };

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDate(selectedValue === "" ? "" : parseInt(selectedValue));
  };

  const dates = news.map((news) => {
    return news.date.getFullYear();
  });

  const filterDates = (dates) => {
    const uniq = new Set(dates);
    return [...uniq];
  };
  const filteredDates = filterDates(dates);
  console.log(selectedDate);
  return (
    <section className={styles.news}>
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
      {filtered.length > 0 ? (
        <ul className={styles.newslist}>
          {filtered
            .sort((newsA, newsB) => newsB.date - newsA.date)
            .map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                title={news.title}
                image={news.image}
                text={news.text}
                date={news.date}
              />
            ))}
        </ul>
      ) : (
        <div className={styles.error}>Новини не знайдено</div>
      )}
    </section>
  );
};

export default News;
