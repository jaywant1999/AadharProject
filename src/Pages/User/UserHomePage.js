import React from "react";
 
import "../../css/UserHomePage.css";
import UserSideBar from "./UserSideBar";
import img from "../../images/candidatehome.jpg"

const UserHomePage = () => {

  return (
    <>
    <UserSideBar/>
   <div className="userhomepage">
    <div className="usersubhome">
      <img src={img}></img>
    </div>
    </div>  
</>
  );
};

export default UserHomePage;
  