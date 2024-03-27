import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // URL adjusted for signup endpoint
    const url = `https://learning-app-7j1c.onrender.com/signup`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful! Please log in.');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        throw new Error(data.message || 'Failed to sign up');
      }
    } catch (error) {
      alert(error.message); // Show error message
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} method="post">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
      </form>
    </div>
  );
}

export default Signup;
