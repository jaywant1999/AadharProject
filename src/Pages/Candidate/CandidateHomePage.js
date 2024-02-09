import React from 'react'

const CandidateHomePage=()=> {
  return (
    <div className="candidate-home-page">
    <h1>Welcome to Candidate Home Page</h1>
    <div className="menu">
      <div className="menu-item">
        <a href="#profile">Profile</a>
      </div>
      <div className="menu-item">
        <a href="#status">Status</a>
      </div>
      <div className="menu-item">
        <a href="#candidate-help">Candidate Help</a>
      </div>
      <div className="menu-item">
        <a href="#logout">Logout</a>
      </div>

    </div>
  </div>
  )
}
export default CandidateHomePage;
