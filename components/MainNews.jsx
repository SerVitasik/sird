import NewsItem from "./NewsItem";
import Button from "./ui/Button";
import {News as DUMMY_NEWS} from "@/store/news";
import styles from "./MainNews.module.scss";

const MainNews = () => {
    return (
        <section className={styles.mainNews}>
            <div className={styles.title}>
                <h2>Новини</h2>
                <Button link='news' className={styles.button}>Усі новини</Button>
            </div>
            <ul className={styles.list}>
                {DUMMY_NEWS.sort((newsA, newsB) => newsB.date - newsA.date).slice(0, 3).map(news => <NewsItem key={news.id} title={news.title} image={news.image} text={news.text} date={news.date}/>)}
            </ul>
        </section>
    );
};

export default MainNews;