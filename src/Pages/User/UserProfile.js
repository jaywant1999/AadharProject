import React, { useState, useEffect } from "react";
import "../../css/UserProfile.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; 
import UserSideBar from "./UserSideBar";

const UserProfile = () => {
  const navigate = useNavigate();
  const [myuserData, setMyUserData] = useState({});
  const [addData, setAddData] = useState({});



  
  const MyData = async (aadhar) => {
    try {
      const response1 = await Axios.post(
        `http://127.0.0.1:1234/fromaadhartable/${aadhar}`
      );
      console.log(response1);
      // console.log("Aadhar data::::",response1 );
      setMyUserData(response1.data);
      const response2 = await Axios.post(
        `http://127.0.0.1:1234/get/users/address/fromaadhar/${aadhar}`
      );
      // console.log(" my Address : ", response2.data);
      setAddData(response2.data);
      // console.log("Address data::::",response1 );
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Please login First!!!");
      navigate("/Home");
    }
  };

  useEffect(() => {
    let aadhar = sessionStorage.getItem("aadhar");
    MyData(aadhar);
  }, []);

  return (
    <>
    <UserSideBar/>
    
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        <table className="profile-table">
          <tbody>
            <tr>
              <td>Aadhar Number:</td>
              <td>{myuserData.AadhaarNumber}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>
                {myuserData.FirstName}
                {myuserData.Middlename}
                {myuserData.LastName}
              </td>
            </tr>
            {/* <tr>
              <td>Address:</td>
              <td>
                {addData.Taluka} {addData.District}{" "}
                {addData.State} {addData.Country} {addData.Pincode}
              </td>
            </tr> */}
            <tr>
              <td>Email:</td>
              <td>{myuserData.Email}</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>{myuserData.DOB}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{myuserData.Gender}</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>{myuserData.MobileNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default UserProfile;
