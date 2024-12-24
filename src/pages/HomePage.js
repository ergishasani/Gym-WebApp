import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Gym Management</h1>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <Link to="/workout">Go to Workout</Link>
      <br />
      <Link to="/admin">Admin Panel</Link>
      <br />
      <Link to="/schedule">Class Schedule</Link>
    </div>
  );
};

export default HomePage;
