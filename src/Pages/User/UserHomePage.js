import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import "../../css/UserHomePage.css";
import UserSideBar from "./UserSideBar";

const UserHomePage = () => {

  return (
    <>
    <UserSideBar/>
   <div className="userhomepage">Welcome</div>
   
   
</>
  );
};

export default UserHomePage;
  