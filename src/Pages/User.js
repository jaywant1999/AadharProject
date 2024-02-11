import React, { useState } from "react";
import "../css/User.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const [aadharID, setAadharID] = useState("");

  const getAadharInfo = async (e) => {
    e.preventDefault();
    try {
      console.log(`${aadharID}`);
      const response = await Axios.post(
        `http://127.0.0.1:1234/aadhar/${aadharID}`
      );
      sessionStorage.setItem("aadhar", response.data.AadhaarNumber);
      setAadharID(response.data);
      console.log(response.data);
      alert("It will redirect to the user Otp page!");
      navigate("/UserOtp");
    } catch (e) {
      alert("Data Not Found!!!");
    }
  };

  // const [action, setAction] = useState("Signup");
  return (
    <>
      <div className="container">
        <h1>User-Registration</h1>
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
              Already Registered? <a href="/UserLogin">Login Here</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

// export default User;
// export default getAadharInfo;

export default User;
