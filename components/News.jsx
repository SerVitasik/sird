import NewsItem from "./NewsItem";
import styles from "../styles/components/News.module.scss";

const News = ({news}) => {
    return (
       <ul className={styles.newslist}>
        {news.sort((newsA, newsB) => newsB.date - newsA.date).map(news => <NewsItem key={news.id} title={news.title} image={news.image} text={news.text} date={news.date}/>)}
       </ul>
    );
};

export default News;