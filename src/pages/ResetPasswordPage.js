// src/pages/ResetPasswordPage.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function ResetPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Password reset requested for:', email);
    // Add password reset logic here (e.g., API call to send reset link)
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 8 }}
      >
        <Typography variant="h4" gutterBottom>
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Reset Link
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default ResetPasswordPage;
