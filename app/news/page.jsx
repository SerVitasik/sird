import Header from "@/components/Header";
import styles from '@/styles/page.module.scss';
import News from "@/components/News";
import {News as DUMMY_NEWS} from "@/store/news";
import Footer from "@/components/Footer";
const NewsPage = () => {
    return(
       <>
        <Header/>
        <main className={styles.main}>
            <News news={DUMMY_NEWS}/>
        </main>
        <Footer/>
       </>
    );
};

export default NewsPage;