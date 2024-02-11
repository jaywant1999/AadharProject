import React, { useState } from "react";
import "../../css/UserLogin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    /**
     * This useState is used when we inserting wrong credential, it will clear the input field
     */
    AadhaarNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    /**
     *This method is responsible  for taking value of each fields and setting them to empty.
     *
     */
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const geToUserHome = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        `http://localhost:1234/verify`,
        loginData,
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        }
      );

      if (response.status === 200) {
        alert("Redirecting to UserHomePage");
        navigate("/UserHomePage");
      } else if (response.status === 404) {
        alert("User not found OR Invalid password");
        setLoginData({ AadhaarNumber: "", password: "" });
      } else {
        console.log(response);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={geToUserHome}>
        <div className="login-container">
          <h1>Login</h1>
          <div className="input-container">
            <input
              type="number"
              name="AadhaarNumber"
              value={loginData.AadhaarNumber}
              onChange={handleInputChange}
              placeholder="Enter Aadhar Number"
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
          <button type="submit">Login</button>
          <p>
            Not registered? <a href="/User">SignUp Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
