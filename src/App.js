// src/components/forms/ResetPasswordForm.js

import React, { useState } from 'react';

function ResetPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add password reset logic here (e.g., send email with reset link)
    console.log('Password reset requested for:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ResetPasswordForm;