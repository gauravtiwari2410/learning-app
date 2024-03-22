import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBook, faAddressBook, faSignInAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header({ courseCount, loginStatus, loginStatusMethodfalse }) {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // Handler for the logout functionality
  const handleLogout = () => {
    loginStatusMethodfalse(); // Call the method to set login status to false
    navigate("/"); // Optionally navigate to the homepage or login page
  };

  return (
    <nav>
      <img src="./images/pic13.png" alt="" className="image" />
      <ul className="nav-menu">
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link to="/about-us"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link></li>
        <li><Link to="/courses"><FontAwesomeIcon icon={faBook} /> Course</Link></li>
        <li><Link to="/contact-us"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link></li>
        {loginStatus ? (
          // Show Logout button if user is logged in
          <li><button onClick={handleLogout}><FontAwesomeIcon icon={faSignInAlt} /> Logout</button></li>
        ) : (
          // Show Login / Course Content button if user is not logged in
          <li><Link to="/login"><button><FontAwesomeIcon icon={faSignInAlt} /> Course Content</button></Link></li>
        )}
        <li><Link to="/showdemo"><button><FontAwesomeIcon icon={faCalendarPlus} /> Show demo</button></Link></li>
        <li id="total"><Link to="/showcart">Total course selected: {courseCount}</Link></li>
      </ul>
    </nav>
  );
}
