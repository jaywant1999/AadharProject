import React from 'react'
import { useState } from "react";


const CandidateHomePage=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Weclome Candidate</h2>
      <ul>
        <li>Candidate Profile</li>
        <li>Candidate Status</li>
        <li>Candidate Help</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
    
  )
}
export default CandidateHomePage;
