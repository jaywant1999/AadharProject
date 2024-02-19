import React from 'react'
import "../../css/CandidateStatus.css"
import CandidateSideBar from './CandidateSideBar';

const CandidateStatus =() => {
  return (
    <>
    <CandidateSideBar/>
    <div className="candidatewelcomepage">
    <div className="candidatewelcomecontainer">
      <h1>Welcome to Our Portal</h1>
      <p className="welcome-text">
         Your status is pending,
         Your status is Approve,
         Your status is Rejected
      </p>
    </div>
  </div>
  </>
  )
}

export default CandidateStatus;