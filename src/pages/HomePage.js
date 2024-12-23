import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';
import ResetPasswordForm from '../components/forms/ResetPasswordForm'; // Import the password reset form

function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Our Gym!</h1>
      </header>

      <main>
        <section>
          <h2>Login</h2>
          <LoginForm />

          <h2>Signup</h2>
          <SignupForm />

          <h2>Reset Password</h2>
          <ResetPasswordForm /> {/* Include the Password Reset form */}
        </section>

        <section>
          <h2>Explore Our App</h2>
          <ul>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/workout">Workouts</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Gym Name</p>
      </footer>
    </div>
  );
}

export default HomePage;