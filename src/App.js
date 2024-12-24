import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import WorkoutPage from "./pages/WorkoutPage";
import AdminPanelPage from "./pages/AdminPanelPage";
import ClassSchedulePage from "./pages/ClassSchedulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
        <Route path="/schedule" element={<ClassSchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
