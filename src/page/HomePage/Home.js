import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleNotificationSend = async () => {
    try {
      const response = await axios.post("http://localhost:5000/send-sms", {
        message: message || 'front response Hello Dear Customer We have announce you name.', // Default message if none is provided
      });
      console.log('API Response:', response.data);
      if (response.data.success) {
        setStatus('Messages sent successfully!');
      } else {
        setStatus('Failed to send messages.');
      }
    } catch (error) {
      setStatus('Error sending messages.');
      console.error(error);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mt: 3 }}
      >
        <Typography variant="h4" align="center">
          Send Notification to All Users
        </Typography>

        <TextField
          label="Message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
          placeholder="Enter your message here or use the default notification"
        />

        <Button variant="contained" color="primary" onClick={handleNotificationSend}>
          Send to All
        </Button>

        {status && <Typography color="secondary">{status}</Typography>}
      </Box>
    </Container>
  );
}

export default Home;
