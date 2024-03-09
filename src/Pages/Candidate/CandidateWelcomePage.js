import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../css/UserWelcomePage.css";

const CandidateWelcomePage = () => {
  return (
    <div className="candidatewelcomepage">
      <div className="candidatewelcomecontainer">
        <div className="candidateuser-icon">
          <FaUserCircle />
        </div>
        <h1>Welcome to Candidate Portal</h1>
        <p className="welcome-text">
          Greetings! Embark on your journey with our portal by completing the
          registration process. Our diligent admin team will carefully verify
          the information provided and any supporting documentation uploaded.
          Stay informed about your application status by logging into the
          portal. Don't forget to set a secure password during registration.
          After admin review, your status will be updated. For assistance, check
          the help tab in the navigation bar.
        </p>
        <div className="cta-buttons">
 
            <a id="reg-btn" href="/Candidate">Register</a>
       
            <a id="reg-btn" href="/CandidateLoginPage">Log In</a>
         
        </div>
      </div>
    </div>
  );
};

export default CandidateWelcomePage;