import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const [isLoggedOut, setIsLoggedOut] = useState(false); // Track logout status
  const [logoutMessage, setLogoutMessage] = useState(''); // Store logout message

  const handleLogout = () => {
    // Perform logout logic (assuming local storage for token)
    localStorage.removeItem('userToken');

    // Set logout status and message
    setIsLoggedOut(true);
    setLogoutMessage('You have been successfully logged out.');

    // Redirect to login page after a brief delay
    setTimeout(() => navigate('/login'), 1500); // Optional: Delay for UI feedback
  };

  return (
    <section className="logout">
      <div className="container">
        <h2>Log Out</h2>
        {isLoggedOut ? (
          <div className="logout-message">
            <p>{logoutMessage}</p>
          </div>
        ) : (
          <button className="btn primary" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </section>
  );
};

export default LogOut;
