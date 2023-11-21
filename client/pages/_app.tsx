
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/editor.css';
import type { AppProps } from 'next/app';
import SideBar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <MobileHeader />
        <SideBar />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default MyApp;