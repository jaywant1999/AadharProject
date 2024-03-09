import React, { useState } from "react";
import "../../css/UserLogin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const [aadharID, setAadharID] = useState("");//Temporary field might delete later
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
     */
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const geToUserHome = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        `http://localhost:1234/verifyusercredential`, //This will check if the user is regestered or not
        loginData,
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        }
      );
      sessionStorage.setItem("aadhar", response.data.AadhaarNumber); //Not working
      setAadharID(response.data);
      console.log(response.data);
      if (response.status === 200) {
        alert("Redirecting to UserHomePage");
         navigate("/UserHomePage");
      } else {
        console.log(response);
        alert("User not found OR invalid password");
        setLoginData({ AadhaarNumber: "", password: "" });
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
            Not registered? <a href="/User">SignUp Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
