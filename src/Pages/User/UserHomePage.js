import React from "react";
import "../../css/UserHomePage.css";

const UserHomePage = () => {
  return (
    <div className="user-home-page">
      <div className="profile"> <h1>User Profile</h1></div>
      <div className="menu-container">
        <div className="menu-item">
        
          <a className="anchor" href="#profile">
            Profile<br/>
           <i id="icon" class="fa fa-drivers-license"></i>
          </a>
          
        </div>
        <div className="menu-item">
          <a className="anchor" href="#status">
            Status<br/>
            <i id="icon" class="fas fa-lightbulb"></i>
          </a>
        </div>
      </div>
      <br></br>
      <div className="menu-container">
        <div className="menu-item">
          <a className="anchor" href="#candidate-help">
            User Help<br/>
            <i id="icon" class="fa-solid fa-handshake-angle"></i>
          </a>
        </div>
        <div className="menu-item">
          <a className="anchor" href="#logout">
            Logout<br/>
            <i id="icon" class="fa-solid fa-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default UserHomePage;
