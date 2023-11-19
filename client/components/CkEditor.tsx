import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react';

interface MyEditorProps {
  id?: number;
  value: string;
  onChange: (value: string) => void;
}

const CkEditor: React.FC<MyEditorProps> = ({ id, value, onChange }) => {
  const [memoryDescription, setMemoryDescription] = useState('');
  const handleReady = (editor: any) => {
    editor.editing.view.change((writer: any) => {
      writer.setStyle('height', `${window.innerHeight - 45}px`, editor.editing.view.document.getRoot());
    });
  };

  // Inserting or updating]
  const handleSave = (newValue: any) => {
      if (id) {
        // updating
        fetch(`http://localhost:3001/memories/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id, description: memoryDescription }),
        });
      } else {
        // inserting
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
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={handleReady}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
          setMemoryDescription(data);
        }}
      />
      <div className="save-button">
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          onClick={() => handleSave(memoryDescription)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default CkEditor;
