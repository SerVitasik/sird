"use client";
import NewsItem from "./NewsItem";
import styles from "./News.module.scss";
import { useState } from "react";
import Search from "./ui/Search";

const News = ({ news }) => {
  const newsWithCorrectDate = news.map((item)=> {
    return {...item, date: new Date(item.date)}
  })


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredByContentNews, setFilteredNews] = useState(newsWithCorrectDate);
  const [selectedDate, setSelectedDate] = useState("");

  const filteredDateNews =
    selectedDate === ""
      ? newsWithCorrectDate
      : newsWithCorrectDate.filter(
          (item) => {
            console.log(item.date.getFullYear().toString());
            return item.date.getFullYear().toString() === selectedDate.toString()
          }
        );
        console.log("Date filter", filteredDateNews);

  const filtered = filteredByContentNews.filter((newsObject) => {
    return filteredDateNews.some(element => JSON.stringify(element) === JSON.stringify(newsObject));
  });
      console.log("Content filter", filteredByContentNews);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      const filteredByContent = newsWithCorrectDate.filter(
        (item) => {
          console.log( item.title.toLowerCase());
          return item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.text.toLowerCase().includes(e.target.value.toLowerCase())
        }
          
      );
      setFilteredNews(filteredByContent);
    }, 300);
  };

  const handleDateChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDate(selectedValue === "" ? "" : parseInt(selectedValue));
  };

  const dates = newsWithCorrectDate.map((news) => {
    return news.date.getFullYear().toString();
  });

  const filterDates = (dates) => {
    const uniq = new Set(dates);
    return [...uniq];
  };
  const filteredDates = filterDates(dates);
  console.log(filteredDates);
  return (
    <section className={styles.news}>
      <Search handleDateChange={handleDateChange} filteredDates={filteredDates} searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      {filtered.length > 0 ? (
        <ul className={styles.list}>
          {filtered
            .sort((newsA, newsB) => newsB.date - newsA.date)
            .map((news) => (
              <NewsItem
                key={news["_id"]}
                id={news["_id"]}
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
