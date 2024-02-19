import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../css/UserWelcomePage.css";

const AdminWelcomePage = () => {
  return (
    <div className="candidatewelcomepage">
      <div className="candidatewelcomecontainer">
        <div className="candidateuser-icon">
          <FaUserCircle />
        </div>
        <h1>Welcome to Our Portal</h1>
        <p className="welcome-text">
          Welcome, administrator. Kindly proceed to log in to the portal. Upon
          successful authentication, navigate to the help section where
          comprehensive documentation detailing the functionality of each
          section, along with instructions on how to utilize our portal, can be
          found.
        </p>
        <div className="cta-buttons">
          <button className="login-btn">
            <a href="/Admin">Log In</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminWelcomePage;
