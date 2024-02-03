import React, { useState } from 'react'
import '../css/User.css'

const User=()=>{


    const [action,setAction] = useState("Signup")
    return(

        <> 
        <div className="container">
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>

        <div className="inputs">

         { action==="Signup"?<div></div>:<div className="input">
         {/* <img src={password} alt=""/> */}
            <input type="password" placeholder='password'/> 
          </div>
          }
      
        <div className="input">
          {/* <img src={user_icon} alt=""/> */}
          <input type="text" placeholder='Enter your Aadhar number here'/>
        </div>
        
      </div>
      {action==="Signup"?<div></div>:  <div className="forgot-password">forgot password? <span>Click here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Signup")}}>Signup</div>
        <div className={action==="Signup"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

    </div>
    </div>
        </>

    );

}

export default User;