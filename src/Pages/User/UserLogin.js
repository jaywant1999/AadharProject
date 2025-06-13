import React, { useState } from "react";
import "../../css/UserLogin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    AadhaarNumber: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const goToUserHome = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await Axios.post(
        "http://localhost:1234/verifyusercredential",
        loginData,
        {
          validateStatus: (status) => status >= 200 && status < 500,
        }
      );

      if (response.status === 200 && response.data?.AadhaarNumber) {
        sessionStorage.setItem("aadhar", response.data.AadhaarNumber);
        navigate("/UserHomePage");
      } else {
        setErrorMessage("User not found or invalid password.");
        
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={goToUserHome}>
        <div className="login-container">
          <h1>Login</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <input
              type="number"
              name="AadhaarNumber"
              value={loginData.AadhaarNumber}
              onChange={handleInputChange}
              placeholder="Enter Aadhaar Number"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <button id="user-log" type="submit">Login</button>
          <p>
            Not registered? <a href="/User">Sign Up Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
