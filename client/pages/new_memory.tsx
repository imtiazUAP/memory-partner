import { NextPage } from 'next';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIRichTextEditor from 'mui-rte';

const Memory: NextPage = (): JSX.Element => {

  const handleSave = (newValue: any) => {
    fetch(`http://localhost:3001/memories/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: 1,
        title: 'This is title',
        description: newValue,
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
            inlineToolbar={true}
            onSave={handleSave}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Memory;
