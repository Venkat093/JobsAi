import { Card, TextField, Button, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

const Discriptiveai = () => {
   const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSend = () => {
      if (question.trim()) {
        setMessages(prev => [
          ...prev,
          { role: 'user', text: question },
          { role: 'bot', text: `This is a dummy response to: "${question}"` }
        ]);
        setQuestion('');
      }
    };
  return (
   <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
      <Card
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: 2,
          marginBottom: 2,
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start' // 👈 forces all children to align left
        }}
      >
        {messages.length === 0 ? (
          <Typography variant="body1">Ask me a coding question!</Typography>
        ) : (
          messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 1,
                textAlign: 'left',
                width: '100%' // 👈 ensures each message uses full width so content wraps properly
              }}
            >
              <Typography
                variant="subtitle2"
                color={msg.role === 'user' ? 'primary' : 'secondary'}
              >
                {msg.role === 'user' ? 'You' : 'CodAi'}
              </Typography>
              <Typography
                variant="body2"
                sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
              >
                {msg.text}
              </Typography>
            </Box>
          ))
        )}
      </Card>

      <TextField
        fullWidth
        label="Type your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button
        variant="contained"
        sx={{ marginTop: 1, alignSelf: 'flex-start' }}
        onClick={handleSend}
      >
        Send
      </Button>
    </Box>
  )
}

export default Discriptiveai