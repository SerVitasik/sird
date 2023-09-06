import styles from '../styles/page.module.scss';
import Header from '../components/Header';
import Sird from '@/components/Sird';
import MainNews from '@/components/MainNews';
export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sird/>
        <MainNews/>
      </main>
      {/* <MainComponent>
      hello
      </MainComponent> */}
    </>
    
  );
}
