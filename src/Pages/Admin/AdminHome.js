import React from 'react'
import '../../css/AdminHome.css'

const AdminHome =()=> {
  return (
    <div className="adminhome">
    <div className="admin-home-page">
    <div className="menu">
      <div className="menu-item">
        <a href="#addelection">Add election</a>
      </div>
      <div className="menu-item">
        <a href="#statistics">Statistics</a>
      </div>
      <div className="menu-item">
        <a href="#validationofcandidate">Validation of candidate</a>
      </div>
      <div className="menu-item">
        <a href="#profile">Profile</a>
      </div>
      <div className="menu-item">
        <a href="#logout">Logout</a>
      </div>
    </div>
    <h1>Welcome to Admin Home Page</h1>
  </div>
  </div>
  );
}
export default AdminHome;
