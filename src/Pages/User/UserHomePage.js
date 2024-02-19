import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../css/UserHomePage.css";
import UserSideBar from "./UserSideBar";

const UserHomePage = () => {
  return (
    <>
      <UserSideBar />
      <div className="userhomepage">
        <h1>User Home Page</h1>
      </div>
    </>
  );
};

export default UserHomePage;
