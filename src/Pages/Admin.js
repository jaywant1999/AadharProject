import { useState } from "react";
import "../css/Admin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../css/SetPassword.css" 

const Admin = () => {
  const [aadhar, setAaadhar] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToAdminHome = async (e) => {
    e.preventDefault();
    const loginData = {
      id: aadhar,
      password: password,
    };
  
    console.log("🔍 Sending Login Request:", loginData); // Debugging
  
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/verify/admin`,
        loginData,
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        }
      );
  
      console.log("✅ Server Response:", response.data); // Debugging
  
      if (response.status === 200) {
        alert("Logged in successfully");
        navigate("/AdminHome");
      } else {
        console.error("🚨 Access Denied:", response.data);
        alert("Access forbidden!!!");
        navigate("/Admin");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <div className="login-form">
        <div className="user-form-container">
          <form className="user-login-form" onSubmit={goToAdminHome}>
            <input
              type="text"
              id="password-inp"
              value={aadhar}
              onChange={(e) => {
                setAaadhar(e.target.value);
              }}
              placeholder="Aadhar Number"
              required
            />
            <input
              type="password"
              id="password-inp"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
            {/* <button type="submit">Login</button> */}
            <input id="user-sub-btn" type="submit"/>
            <p className="message">
              Forgot your password? <a href="#">Click here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
