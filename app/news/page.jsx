import Header from "@/components/Header";
import styles from '@/styles/page.module.scss';
import Container from "@/components/ui/Container";
import News from "@/components/News";

const NewsPage = () => {
    return(
       <>
        <Header/>
        <main className={styles.main}>
            <News />
        </main>
       </>
    );
};

export default NewsPage;