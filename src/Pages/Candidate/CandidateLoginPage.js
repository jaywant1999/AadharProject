import React from "react";
import "../../css/CandidateLoginPage.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

const CandidateLoginPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    AadhaarNumber: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const goToCandidateHome = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await Axios.post(
        "http://localhost:1234/verifyCandidateCredential",
        loginData,
        {
          validateStatus: (status) => status >= 200 && status < 500,
        }
      );

      if (response.status === 200 && response.data?.AadhaarNumber) {
        sessionStorage.setItem("aadhar", response.data.AadhaarNumber);
        alert("Redirecting to Candidate Home Page");
        navigate("/CandidateHomePage");
      } else {
        setErrorMessage(response.data.message || "Invalid credentials");
        setLoginData({ AadhaarNumber: "", password: "" });
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={goToCandidateHome}>
          <h2>Candidate Login</h2>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <label>
            Aadhar Number:
            <input
              type="text"
              name="AadhaarNumber"
              value={loginData.AadhaarNumber}
              onChange={handleInputChange}
              placeholder="Enter Aadhar Number"
              required
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />
          </label>
          <br />

          <button type="submit">Login</button>

          <p>
            Not registered? <a href="/Candidate">Sign Up Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default CandidateLoginPage;
