// src/pages/WorkoutPage.js

import React, { useState, useEffect } from 'react';
import { fetchWorkouts, createWorkout } from '../services/apiService';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function WorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');
  const [newReps, setNewReps] = useState('');

  useEffect(() => {
    const loadWorkouts = async () => {
      const data = await fetchWorkouts();
      setWorkouts(data);
    };
    loadWorkouts();
  }, []);

  const handleAddWorkout = async (event) => {
    event.preventDefault();
    const newWorkoutData = { name: newWorkout, reps: newReps };
    const createdWorkout = await createWorkout(newWorkoutData);
    setWorkouts([...workouts, createdWorkout]);
    setNewWorkout('');
    setNewReps('');
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          My Workouts
        </Typography>

        {/* List of Workouts */}
        <List sx={{ width: '100%', bgcolor: 'background.paper', marginBottom: 2 }}>
          {workouts.map((workout) => (
            <ListItem key={workout.id}>
              <ListItemText primary={workout.name} secondary={workout.reps} />
            </ListItem>
          ))}
        </List>

        {/* Add New Workout Form */}
        <form onSubmit={handleAddWorkout}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Workout Name"
              value={newWorkout}
              onChange={(e) => setNewWorkout(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Reps/Duration"
              value={newReps}
              onChange={(e) => setNewReps(e.target.value)}
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Workout
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default WorkoutPage;
