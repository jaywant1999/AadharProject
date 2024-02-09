import React from 'react'
import '../../css/UserHomePage.css'

const UserHomePage=()=> {
  return (
    <div className="user-home-page">
    <h1>Welcome to User Home Page</h1>
    <div className="menu-container">
      <div className="menu-item">
        <a className="anchor" href="#profile">Profile</a>
      </div>
      <div className="menu-item">
        <a className="anchor" href="#status">Status</a>
      </div>
      <div className="menu-item">
        <a className="anchor" href="#candidate-help">User Help</a>
      </div>
      <div className="menu-item">
        <a className="anchor" href="#logout">Logout</a>
      </div>
    </div>
  </div>
  )
}
export default UserHomePage;
