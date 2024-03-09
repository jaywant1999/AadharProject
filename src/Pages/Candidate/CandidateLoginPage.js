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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const goToAdminHome = async (e) =>{
    e.preventDefault();
    try {
      const response = await Axios.post(
        `http://localhost:1234/verifyCandidateCredential`, //This will check if the user is regestered or not
        loginData,
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        }
      );

      if (response.status === 200) {
        alert("Redirecting to UserHomePage");
        navigate("/CandidateHomePage");
      } else {
        console.log(response);
        alert("Candidate not found");
        setLoginData({ AadhaarNumber: "", password: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={goToAdminHome}>
          <h2>Candidate Login</h2>
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
            Not registered?<a href="/Candidate">SignUp Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CandidateLoginPage;
