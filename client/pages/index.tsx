import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FullScreenHeader from "../components/FullScreenHeader";
import Banner from "../components/Banner";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LockIcon from '@mui/icons-material/Lock';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import BookIcon from '@mui/icons-material/Book';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap"
        />
      </Head>
      <main className={styles.home_container}>
        <div className="fullscreen-header">
          <FullScreenHeader />
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <StickyNote2Icon className={styles.icon} />
            <h2>Notes</h2>
            <p>
              Write your daily notes so whenever you need I can assist you
              partner!
            </p>
          </div>

          <div className={styles.card}>
            <DocumentScannerIcon className={styles.icon} />
            <h2>Documentation</h2>
            <p>
              You can document anything that you want me to remind you later
            </p>
          </div>

          <div className={styles.card}>
            <LockIcon className={styles.icon} />
            <h2>Password Manager</h2>
            <p>You can keep secrets securely and only you can access them.</p>
          </div>

          <div className={styles.card}>
            <EventAvailableIcon className={styles.icon} />
            <h2>Calender Events</h2>
            <p>
              Create calender events so I can remind you on time via email.
            </p>
          </div>
          <div className={styles.card}>
            <CheckCircleOutlineIcon className={styles.icon} />
            <h2>To-Do List</h2>
            <p>
              Create and follow along with your to-do list.
            </p>
          </div>
          <div className={styles.card}>
            <NotificationsActiveIcon className={styles.icon} />
            <h2>Reminder</h2>
            <p>
              I can remind you about birthdays, bill payments.
            </p>
          </div>
          <div className={styles.card}>
            <PaidIcon className={styles.icon} />
            <h2>Expense Tracker</h2>
            <p>
              Track your expenses and plan better.
            </p>
          </div>
          <div className={styles.card}>
            <BookIcon className={styles.icon} />
            <h2>Personal Journal</h2>
            <p>
              Writing personal journal helps people to do better.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <label>
          Developed by{" "}
          <a href="https://imtiaz.cloud/" target="_blank">
            Imtiaz Ahmed
          </a>
        </label>
      </footer>
    </>
  );
};

export default Home;
