import Header from "@/components/Header";
import styles from '@/styles/page.module.scss';
import Container from "@/components/ui/Container";
import News from "@/components/News";
import {News as DUMMY_NEWS} from "@/store/news";
const NewsPage = () => {
    return(
       <>
        <Header/>
        <main className={styles.main}>
            <News news={DUMMY_NEWS}/>
        </main>
       </>
    );
};

export default NewsPage;