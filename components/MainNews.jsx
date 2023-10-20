import NewsItem from "./NewsItem";
// import { News as DUMMY_NEWS } from "@/store/news";
import styles from "./MainNews.module.scss";
import Title from "./ui/Title";
import Link from "next/link";

const MainNews = ({news}) => {

  const newsWithCorrectDate = news.map((item)=> {
    return {...item, date: new Date(item.date)}
  })

  return (
    <section className={styles.mainNews}>
      <div className={styles.title}>
        <Title>Новини</Title>
        <Link href="/news" className={styles.button}>
          Усі новини
        </Link>
      </div>
      <ul className={styles.list}>
        {newsWithCorrectDate.sort((newsA, newsB) => newsB.date - newsA.date)
          .slice(0, 3)
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
    </section>
  );
};

export default MainNews;
