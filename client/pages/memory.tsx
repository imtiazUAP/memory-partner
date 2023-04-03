import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { Button } from '@material-ui/core';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MUIRichTextEditor from 'mui-rte';
// import styles from '../styles/memory.module.css';
// import { EditorState, convertToRaw } from 'draft-js';

const Memory: NextPage = (): JSX.Element => {
  // const emptyContentState = JSON.stringify(
  //   convertToRaw(EditorState.createEmpty().getCurrentContent()),
  // );
  // const [memoryId, setMemoryId] = useState(0);
  // const [memoryDescription, setMemoryDescription] = useState(emptyContentState);
  // const router = useRouter();
  // const { id } = router.query;

  // const handleChange = (newValue: EditorState) => {
  //   const contentState = newValue.getCurrentContent();
  //   const rawContentState = JSON.stringify(convertToRaw(contentState));
  //   setMemoryDescription(rawContentState);
  // };

  // const handleSave = () => {
  //   fetch(`http://localhost:3000/memories/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify({ id: id, description: memoryDescription }),
  //     body: JSON.stringify({}),
  //   });
  // };

  // const myTheme = createTheme({
  //   // Set up your custom MUI theme here
  // });

  // if (id && (!memoryId || (memoryId && Number(memoryId) !== Number(id)))) {
  //   fetch(`http://localhost:3000/memories/${id}`, {
  //     method: 'GET',
  //   }).then(async (response: any) => {
  //     const memory = await response.json();

  //     if (memory.description.length > 1) {
  //       const parsedDescription = JSON.parse(memory.description);
  //       setMemoryDescription(parsedDescription);
  //     }
  //     setMemoryId(memory.id);
  //   });
  // }

  return (
    <div className="content">
      {/* {memoryId && (
        <div>
          <ThemeProvider theme={myTheme}>
            <MUIRichTextEditor
              label="Type something here..."
              value={memoryDescription}
              inlineToolbar={true}
              onChange={(newValue) => handleChange(newValue)}
              onSave={handleSave}
            />
          </ThemeProvider>
        </div>
      )} */}
    </div>
  );
};

export default Memory;
