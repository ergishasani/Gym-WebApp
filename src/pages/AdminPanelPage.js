// src/pages/AdminPanelPage.js

import React, { useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Button, TextField } from '@mui/material';

function AdminPanelPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Member' },
    { id: 2, name: 'Jane Smith', role: 'Trainer' },
  ]);
  const [newUser, setNewUser] = useState('');
  const [newRole, setNewRole] = useState('');

  const handleAddUser = (event) => {
    event.preventDefault();
    if (!newUser || !newRole) {
      alert('Please enter user name and role!');
      return;
    }
    setUsers([...users, { id: Date.now(), name: newUser, role: newRole }]);
    setNewUser('');
    setNewRole('');
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 8 }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Panel
        </Typography>

        {/* User Management */}
        <Typography variant="h6" gutterBottom>
          Manage Users
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: 2 }}>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name} secondary={`Role: ${user.role}`} />
            </ListItem>
          ))}
        </List>

        {/* Add New User */}
        <form onSubmit={handleAddUser}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="User Name"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add User
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AdminPanelPage;
