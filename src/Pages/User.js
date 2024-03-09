import React, { useState } from "react";
import "../css/User.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const navigate = useNavigate();
  const [aadharID, setAadharID] = useState("");

  const getAadharInfo = async (e) => {
    e.preventDefault();
    try {
      console.log(`${aadharID}`);

      const isUserExist = await Axios.get(`http://127.0.0.1:1234/${aadharID}`); // To check if user already exist
      console.log("isUserExist.data.isExist : ", isUserExist.data.isExist);

      if (!isUserExist.data.isExist) {
        //If user does not exist then isExist=false{Router.js line-44}
        const response = await Axios.post(
          `http://127.0.0.1:1234/fromaadhartable/${aadharID}` //Validate  Aadhaar number and send request to server for data fetching
        );
        if (response.data.key) {
          toast.info("Your age is not valid", {
            position: "top-center",
          });
          //alert('Your age is not valid');
          return;
          // navigate(`/Home`);
        }

        sessionStorage.setItem("aadhar", aadharID);
        setAadharID(response.data);
        console.log(response.data.key);
        if (!response.data.key) {
          toast.info("It will redirect to the user Otp page!", {
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/UserOtp");
          }, 3000);
        }
      } else {
        toast.info("This Aadhaar number is already registered!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/User");
        }, 3000);

        //This check is not working
      }
    } catch (e) {
      toast.error("Aadhar not valid!!!", {
        position: "top-center",
      });
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
      <ToastContainer />
    </>
  );
};

export default User;
