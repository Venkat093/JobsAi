import React, { useState } from 'react';
import { Card, Button, Typography, Box } from '@mui/material';

const Resume = () => {
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState(
    `This is a sample self-introduction based on your uploaded resume. 
    Once a resume is uploaded, this section can be populated dynamically from backend or parsed content.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, 
    sem nec varius fermentum, nisl quam facilisis turpis, sit amet iaculis ex leo non nisi. 
    (Repeat this to test scroll...) `.repeat(10)
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // TODO: Upload and parse file content
    }
  };

  return (
    <Card
      sx={{
        padding: 2,
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* File Upload Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body2" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {fileName || "No file selected. Please select a PDF or DOC file."}
        </Typography>
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            accept=".pdf,.docx"
            hidden
            onChange={handleFileChange}
          />
        </Button>
      </Box>

      {/* Scrollable Description Section */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: 1,
          borderRadius: '4px',
          backgroundColor: '#fafafa',
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default Resume;
