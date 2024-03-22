import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "./login.css";

function Login({loginStatus, loginStatusMethod}) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setShowPopup(false); // Hide popup when toggling mode
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const endpoint = isLoginMode ? '/login' : '/signup';
    const url = `http://localhost:4000${endpoint}`; // Adjust the port if your backend uses a different one
    
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
        if (isLoginMode) {
          // Navigate to /coursecontent if login is successful
          loginStatusMethod(true);
          navigate('/coursecontent');
        } else {
          // Handle signup success
          setPopupMessage('Signup Successful! Please log in.');
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            toggleMode();
          }, 3000);
        }
      } else {
        throw new Error(data.message || 'An error occurred');
      }
    } catch (error) {
      setPopupMessage(error.message);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const renderForm = () => (
    <>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" required />
      <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
    </>
  );

  return (
    <div className="login-container">
      <h1>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit} method='post'>
        {renderForm()}
      </form>
      {showPopup && (
        <div className="popup" style={{backgroundColor: '#f44336', color: '#fff'}}>
          {popupMessage}
        </div>
      )}
      <p>
        {isLoginMode ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleMode} id="toggleModeButton">
          {isLoginMode ? 'Sign Up Here' : 'Login Here'}
        </button>
      </p>
    </div>
  );
}

export default Login;
