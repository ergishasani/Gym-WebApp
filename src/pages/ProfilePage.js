// src/pages/ProfilePage.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    console.log('Profile updated:', { name, email, password });
    // Add logic to update user profile
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
          My Profile
        </Typography>
        <form onSubmit={handleSave}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Box>
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
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Leave blank to keep current password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default ProfilePage;
