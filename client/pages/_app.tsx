import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/editor.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;