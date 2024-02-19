import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import "../../css/UserHomePage.css";

const UserHomePage = () => {
  useEffect(() => {
    // Set a timeout to add the 'open' class after 2 seconds
    const timeoutId = setTimeout(() => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('open');
    }, 500); // Delay less than 1 seconds

    // Cleanup function to clear the timeout if the component unmounts before 2 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <div className="sidebar">
        <h2>Welcome User</h2>
        <ul>
          <li><Link to="/UserProfile">User Profile</Link></li>
          <li><Link to="/UserAddElection">Add Election</Link></li>
          <li><Link to="/UserHelp">User Help</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default UserHomePage;
  