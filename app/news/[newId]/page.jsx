import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import styles from '@/styles/page.module.scss';
import { useRouter } from "next/router";

const NewsInfo = () => {

    const router = useRouter();

    const {pathname, query} = router;

    return(
       <Container>
        <Header/>
        <main className={styles.main}>
            <h1>News {pathname}</h1>
            <p>{query}</p>
        </main>
        {/* <MainComponent>
            <h1>News {pathname}</h1>
                <p>{query}</p>
        </MainComponent> */}
       </Container>
    );
};

export default News;