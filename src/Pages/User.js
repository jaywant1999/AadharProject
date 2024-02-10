import React, { useState } from "react";
import "../css/User.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const User = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const goToUserOtp=()=>{
    alert('It will redirect to the user otp page'); // Show an alert when the button is clicked
    navigate('/UserOtp'); // Navigate to the user otp page
  }
=======
  const [aadharID, setAadharID] = useState("");
  const [action, setAction] = useState("Signup");
  // const [aadharData, setAadharData] = useState([]);
>>>>>>> 67f3b391810218610d07f322e4cd8a91b4fff099

  const getAadharInfo = async (e) => {
    e.preventDefault();
    try {
      console.log(`${aadharID}`);
      const response = await Axios.post(
        `http://127.0.0.1:1234/aadhar/${aadharID}`
      );
      sessionStorage.setItem('aadhar', response.data.AadhaarNumber);//////////
      setAadharID(response.data);
      console.log(response.data);
      alert("It will redirect to the user Otp page!");
      navigate("/UserOtp");
      
    } catch (e) {
      alert("Data Not Found!!!");
    }
  };

  const goToUserHome = () => {
    alert("It will redirect to the user home page"); // Show an alert when the button is clicked
    navigate("/UserHomePage"); // Navigate to the user home page
  };

  // const [action, setAction] = useState("Signup");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="container">
            <form>
              <div className="form-group">
                {/* <img src={user_icon} alt=""/> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Aadhar number here"
                  onChange={(e) => {
                    setAadharID(e.target.value);
                  }}
                />
              </div>
              {action === "Signup" ? null : (
                <div className="form-group">
                  {/* <img src={password} alt=""/> */}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              )}
              <button type="submit" onClick={getAadharInfo} className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
<<<<<<< HEAD

        <div>
          <button onClick={goToUserOtp}>Submit</button>
=======
        {action === "Signup" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            forgot password? <span>Click here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Signup");
            }}
          >
            Signup
          </div>
          <div
            className={action === "Signup" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
>>>>>>> 67f3b391810218610d07f322e4cd8a91b4fff099
        </div>
      </div>
    </>
  );
};

// export default User;
// export default getAadharInfo;

export default User;

