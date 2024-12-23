// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import WorkoutPage from './pages/WorkoutPage';
import AdminPanelPage from './pages/AdminPanelPage';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <div>
      {/* Global Navbar */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
      </Routes>
    </div>
  );
}

export default App;
