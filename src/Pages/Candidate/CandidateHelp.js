import React from 'react'
import CandidateSideBar from './CandidateSideBar';

function CandidateHelp() {
    return (
        <>
        <CandidateSideBar/>
        <div className="guide-container">
          <h1>Candidate Guide</h1>
          <p>
            Welcome to the candidate help! This page provides you with an overview
            of the features available to you.
          </p>
    
          <div className="guide-div">
            <h3>Profile</h3>
            <p>
              In the profile section, you can view and update your personal
              information, such as your name and general details.
            </p>
          </div>
    
          <div className="guide-div">
            <h3> Status</h3>
            <p>
              Check the status of your verification by clicking on the verification
              tab. If your verification is pending, wait for the admin to verify
              your details.{" "}
            </p>
          </div>
    
          <div className="guide-div">
            <h3>Logout</h3>
            <p>
              To logout, click on the logout button located at the top-right corner
              of the dashboard. After logout, you will be redirected to the login
              page.
            </p>
          </div>
        </div>
        </>
      );
    }


export default CandidateHelp;