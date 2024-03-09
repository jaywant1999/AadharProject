import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const SetUserPassword = () => {
  const navigate = useNavigate();
  const [aadhar, setAaadhar] = useState("");
  const [password, setPassword] = useState("");
  // const [isValid, setIsValid] = useState("");

  useEffect(() => {
    setAaadhar(sessionStorage.getItem("aadhar"));
  }, []);

  const goToUserHome = async (e) => {
    e.preventDefault();
    const userData = {
      AadhaarNumber: aadhar,
      password: password,
    };

    try {
      const response = await Axios.post(`http://127.0.0.1:1234/adduserinuserlogin/`, userData); //working Saving credentials into user login table
      console.log(response.data.message);
      // setIsValid(response.data.message);
      alert("It will redirect to the User Home page"); 
      sessionStorage.clear();// Show an alert when the button is clicked
      navigate("/UserLogin"); // Navigate to the admin home page
    } catch (e) {
      console.log(e.response.data.error);
      alert(e.response.data.error);
    }
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form" onSubmit={goToUserHome}>
          <h1>{aadhar}</h1>
          <input
            type="password"
            id="aadhar"
            placeholder="Set Password"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // value={password}
            placeholder="Re-Enter Password"
            required
          />
          <button type="submit">Submit</button>

          <p class="message">
            {/* forgot password? <a href="#">Click here</a> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SetUserPassword;
