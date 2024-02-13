import { useState } from "react";
import React from "react";
import "../../css/AdminHome.css";
import { Link } from 'react-router-dom';

const AdminHome = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click on any link
  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar
  };

  return (
    <div>
      <div class="admincontent">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Welcome Admin</h2>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? "←" : "→"}
      </button>
      <ul>
        <li><Link to="/">Admin Profile</Link></li>
        <li><Link to="/">Statistics</Link></li>
        <li><Link to="/AdminAddElection" >Add Election</Link></li>
        <li><Link to="/ValidateCandidate" >Validation of Candidate</Link></li>
        <li><Link to="/" onClick={handleLinkClick}>Logout</Link></li>
      </ul>
    </div>
  </div>
  );
};
export default AdminHome;
