import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../../css/UserWelcomePage.css";

const UserWelcomePage = () => {
  return (
    <div className="candidatewelcomepage">
      <div className="candidatewelcomecontainer">
        <div className="candidateuser-icon">
          <FaUserCircle />
        </div>
        <h1>Welcome to Our Portal</h1>
        <p className="welcome-text">
          Welcome to our Aadhar-based E-voting portal. To participate in the
          voting process, registration on our platform is mandatory. During
          registration, please provide your Aadhar number, which will be
          automatically validated by our system. Following successful
          validation, you will be able to access your personal details. It's
          important to note that individuals under the age of 18 are ineligible
          for registration. Once you meet the age requirement, proceed to set up
          a password for seamless login access. With your credentials in place,
          you'll be ready to exercise your voting rights on election day. For
          additional assistance or information, please refer to the help option
          available in the navigation bar.
        </p>
        <div className="cta-buttons">
          <button className="sign-up-btn">
            <a href="/User">Register</a>
          </button>
          <button className="login-btn">
            <a href="/UserLogin">Log In</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWelcomePage;
