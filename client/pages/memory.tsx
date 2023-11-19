import { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { EditorState, convertToRaw } from 'draft-js';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Memory: NextPage = (): JSX.Element => {
  const emptyContentState = JSON.stringify(
    convertToRaw(EditorState.createEmpty().getCurrentContent()),
  );
  const Editor = dynamic(() => import('../components/CkEditor'), { ssr: false });
  const [memoryId, setMemoryId] = useState(0);
  const [memoryDescription, setMemoryDescription] = useState(emptyContentState);
  const router = useRouter();
  const { id } = router.query;

  if (id && (!memoryId || (memoryId && Number(memoryId) !== Number(id)))) {
    fetch(`http://localhost:3001/memories/${id}`, {
      method: 'GET',
    }).then(async (response: any) => {
        if (response.headers.get('Content-Type')?.includes('application/json')) {
        const memory = await response.json();
        if (memory.description.length > 1) {
          const parsedDescription = memory.description;
          setMemoryDescription(parsedDescription);
        }
        setMemoryId(memory.id);
      }
    });
  }


  return (
    <div className="content">
      <Head>
        <title>Memory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <Editor
              id={memoryId}
              value={memoryDescription}
              onChange={(newValue) => console.log('value changed: ', newValue)}
          />
        </div>
    </div>
  );
};

export default Memory;
