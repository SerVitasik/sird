import styles from '../styles/page.module.scss';
import Header from '../components/Header';
import Sird from '@/components/Sird';
import MainNews from '@/components/MainNews';
import Partners from '@/components/Partners';
export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sird/>
        <MainNews/>
        <Partners />
      </main>
      {/* <MainComponent>
      hello
      </MainComponent> */}
    </>
    
  );
}
