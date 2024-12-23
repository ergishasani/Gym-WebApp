// src/services/apiService.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your actual backend URL
});

// Mock API methods
export const fetchWorkouts = async () => {
  const response = await API.get('/workouts'); // Replace with real endpoint
  return response.data;
};

export const createWorkout = async (workout) => {
  const response = await API.post('/workouts', workout); // Replace with real endpoint
  return response.data;
};

// Add more API methods as needed
