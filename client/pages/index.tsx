import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi <span className={styles.partner}>Partner!</span>
        </h1>

        <p className={styles.description}>
          I can remember anything you want me to remember!
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Notes &rarr;</h2>
            <p>Write your daily notes so whenever you need I can assist you partner!</p>
          </div>

          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>You can document anything that you want me to remind you later</p>
          </div>

          <div className={styles.card}>
            <h2>Keep Secrets &rarr;</h2>
            <p>You can keep secrets securely and only you can access them.</p>
          </div>

          <div className={styles.card}>
            <h2>Calender Events &rarr;</h2>
            <p>
              You can create calender events so I can send a mail to remember you on-time.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <label>Developed by <a href="https://imtiaz.cloud/" target="_blank">Imtiaz Ahmed</a></label>
      </footer>
    </div>
  );
};

export default Home;
