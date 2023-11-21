import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../components/CkEditor'), { ssr: false });

const Memory: NextPage = (): JSX.Element => {
  return (
    <div className="content">
      <Head>
        <title>New memory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Editor            
          value=""
          onChange={(newValue) => console.log(newValue)}
        />
      </div>
    </div>
  );
};

export default Memory;
