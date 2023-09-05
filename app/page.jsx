import styles from '../styles/page.module.scss';
import Header from '../components/Header';
import Sird from '@/components/Sird';
export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sird/>
      </main>
      {/* <MainComponent>
      hello
      </MainComponent> */}
    </>
    
  );
}
