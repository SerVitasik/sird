import NewsItem from "./NewsItem";
import Button from "./ui/Button";
import {News as DUMMY_NEWS} from "@/store/news";
import styles from "@/styles/components/MainNews.module.scss";

const MainNews = () => {
    return (
        <section className={styles.MainNews}>
            <div className={styles.Title}>
                <h2 className={styles.Title}>Новини</h2>
                <Button link='news'>Усі новини</Button>
            </div>
            <ul className={styles.List}>
                {DUMMY_NEWS.sort((newsA, newsB) => newsB.date - newsA.date).slice(0, 3).map(news => <NewsItem key={news.id} title={news.title} image={news.image} text={news.text} date={news.date}/>)}
            </ul>
        </section>
    );
};

export default MainNews;