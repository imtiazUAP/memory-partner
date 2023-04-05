import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { EditorState, convertToRaw } from 'draft-js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';

const Memory: NextPage = (): JSX.Element => {
  const emptyContentState = JSON.stringify(
    convertToRaw(EditorState.createEmpty().getCurrentContent()),
  );
  const [memoryDescription, setMemoryDescription] = useState(emptyContentState);

  const handleChange = (newValue: EditorState) => {
    const contentState = newValue.getCurrentContent();
    const rawContentState = JSON.stringify(convertToRaw(contentState));
    setMemoryDescription(rawContentState);
  };

  const handleSave = () => {
    fetch(`http://localhost:3001/memories/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1,
        title: 'This is title',
        description: memoryDescription,
        updated_by: 1,
      }),
    });
  };

  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  return (
    <div className="content">
      <div>
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            label="Type something here..."
            value={memoryDescription}
            inlineToolbar={true}
            onChange={(newValue: EditorState) => handleChange(newValue)}
            onSave={handleSave}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Memory;
