import React from 'react'
import "../../css/CandidateStatus.css"
import CandidateSideBar from './CandidateSideBar';

const CandidateStatus =() => {
  return (
    <>
    <CandidateSideBar/>
    <div className="candidate-welcomepage">
    <div className="candidatewelcomecontainer">
      <h1>Welcome Candidate..know your status</h1>
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