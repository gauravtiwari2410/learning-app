import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({ loginStatusMethod }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // URL adjusted for login endpoint
    const url = `https://learning-app-7j1c.onrender.com/login`;

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
        loginStatusMethod(true); // Assuming this sets the user as logged in globally
        navigate('/coursecontent'); // Redirect the user after successful login
      } else {
        throw new Error(data.message || 'Failed to log in');
      }
    } catch (error) {
      alert(error.message); // Show error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} method="post">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type="submit">Login</button>
        <p>Don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
      </form>
    </div>
  );
}

export default Login;
