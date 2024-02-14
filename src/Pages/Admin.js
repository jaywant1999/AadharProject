import { useState } from "react";
import "../css/Admin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

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

      if (response.status === 200) {
        alert("Logged in successfully");
        navigate("/adminhome");
      } else {
        // console.log(response);
        alert("Access forbidden!!!"); // Display the error message from the server
        navigate("/Admin");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={goToAdminHome}>
            <input
              type="text"
              id="aadhar"
              value={aadhar}
              onChange={(e) => {
                setAaadhar(e.target.value);
              }}
              placeholder="Aadhar Number"
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
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
