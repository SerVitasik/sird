"use client";
import NewsItem from "./NewsItem";
import styles from "./News.module.scss";
import { useState } from "react";


const News = ({news}) => {

    // const page = searchParams['page'] ?? '1';
    // const perPage = searchParams['perPage'] ?? '12';

    // const start = (Number(page) - 1) * Number(perPage);
    // const end = start + Number(perPage);

    // const entries = news.slice(start, end);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredNews, setFilteredNews] = useState(news);   

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

        setTimeout(() => {
            const filtered = news.filter((item) =>
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredNews(filtered);
          }, 300);
    };

    return (
        <>
        <div className={styles.searchBox}>
            <input
                type="text"
                placeholder="Поиск по заголовку"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
        <ul className={styles.newslist}>
        {filteredNews
          .sort((newsA, newsB) => newsB.date - newsA.date)
          .map((news) => (
            <NewsItem
              key={news.id}
              title={news.title}
              image={news.image}
              text={news.text}
              date={news.date}
            />
          ))}
       </ul>
        </>
       
    );
};

export default News;