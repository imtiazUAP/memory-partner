import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { EditorState, convertToRaw } from 'draft-js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';
import Head from 'next/head';

const Memory: NextPage = (): JSX.Element => {
  const emptyContentState = JSON.stringify(
    convertToRaw(EditorState.createEmpty().getCurrentContent()),
  );
  const [memoryId, setMemoryId] = useState(0);
  const [memoryDescription, setMemoryDescription] = useState(emptyContentState);
  const router = useRouter();
  const { id } = router.query;

  const handleSave = (editedDescription:any) => {
    fetch(`http://localhost:3001/memories/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id, description: editedDescription }),
    });
  };

  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  if (id && (!memoryId || (memoryId && Number(memoryId) !== Number(id)))) {
    fetch(`http://localhost:3001/memories/${id}`, {
      method: 'GET',
    }).then(async (response: any) => {
      const memory = await response.json();

      if (memory.description.length > 1) {
        const parsedDescription = JSON.parse(memory.description);
        setMemoryDescription(parsedDescription);
      }
      setMemoryId(memory.id);
    });
  }

  return (
    <div className="content">
      <Head>
        <title>Memory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {memoryId && (
        <div>
          <ThemeProvider theme={myTheme}>
            <MUIRichTextEditor
              label="Type something here..."
              value={memoryDescription}
              inlineToolbar={true}
              onSave={handleSave}
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Memory;
