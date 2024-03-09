import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../css/Candidate.css";

const Candidate = () => {
  const navigate = useNavigate();
  const [aadharID, setAadharID] = useState("");

  const getAadharInfo = async (e) => {
    e.preventDefault();
    try {
      console.log(`${aadharID}`);

      const isCandiExist = await Axios.post(
        `http://127.0.0.1:1234/candidates/${aadharID}`
      );
      console.log("isCandiExist.data.isExist : ", isCandiExist.data);

      if (!isCandiExist.data.isExist) {
        const response = await Axios.post(
          `http://127.0.0.1:1234/fromaadhartable/${aadharID}` //this will fetch data from aadhar table
        );
        if (response.data.key) {
          alert("Your age is not valid");
          return;
          // navigate(`/Home`);
        }
        sessionStorage.setItem("candidateaadhar", aadharID); // Changing aadhar to candidateaadhar
        setAadharID(response.data);
        console.log(response.data);
        alert("It will redirect to the Candidate Otp page!");
        navigate("/CandidateOtp");
      } else {
        alert("This Aadhaar number is already regestered!");
        navigate("/Candidate");
      }
    } catch (e) {
      // console.log(e);
      alert("Aadhar Number Not Valid!!!");
    }
  };
  return (
    <>
      <div className="container">
        <h2>Candidate</h2>
        <form onSubmit={getAadharInfo}>
          <div className="form-group">
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              placeholder="Enter Aadhar Number"
              onChange={(e) => {
                setAadharID(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
          <div className="form-group already-registered">
            <p>
              Already Registered? <a href="/CandidateLoginPage">Login Here</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Candidate;
