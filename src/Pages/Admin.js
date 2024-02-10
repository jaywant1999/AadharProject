import { useState } from "react";
import "../css/Admin.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Admin = () => {
  const [aadhar, setAaadhar] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("");
  //  console.log("isValid : ", isValid)
  // console.log("Aadhar : ", aadhar)
  // console.log("Password : ", password)

  const navigate = useNavigate();

  const goToAdminHome = async (e) => {
    e.preventDefault();
    const loginData = {
      AadhaarNumber: aadhar,
      password: password,
    };

    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/verify`,
        loginData
      );
      //  console.log(response.data.message);
      setIsValid(response.data.message);
      alert("It will redirect to the admin home page"); // Show an alert when the button is clicked
      navigate("/adminhome"); // Navigate to the admin home page
    } catch (e) {
      //   console.log(e.response.data.message);
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={goToAdminHome}>
            <input
              type="text"
              id="aadhar"
              value={aadhar}
              onChange={(e) => {
                setAaadhar(e.target.value);
              }}
              placeholder="username"
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              required
            />
            <button type="submit">login</button>
            <p class="message">
              forgot password? <a href="#">Click here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
