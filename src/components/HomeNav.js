import { useState } from "react";
import "../css/HomeNav.css";
import voter from "../images/votehand.png";
 

 function Homenav(){ 
     
    const [menuOpen, setMenuOpen] = useState(false);
    
        return(
           <nav className="NavbarItems">
            <div className="logocontent"><img id="img1" src={voter} alt="voter"/><h1 className="Navbar-logo"><b>मेरा देश, <br/>मेरा चुनाव ...</b></h1></div>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
            <span></span>
            <span></span>
            <span></span>
            </div> 
            <ul className={menuOpen ? "open" :" "} >
                <li>
                    <a className="links" href="/">
                 
                        <i className="fa-solid fa-house" />
                            Home 
                    </a>
                </li>
                
                <li>
                    <a className="links" href="/AdminWelcomePage">
                        <i className="fa-solid fa-user-tie"></i>
                        Admin 
                    </a>
                </li>
                
                <li>
                    <a className="links" href="/CandidateWelcomePage">
                        <i className="fa-solid fa-user-large"></i>
                        Candidate 
                    </a>
                </li> 
                
                <li>
                    <a className="links" href="/UserWelcomePage">
                        <i className="fa-solid fa-users-line"></i>
                        User 
                    </a>
                </li>

                <li>
                    <a className="links" href="/Help">
                    <i className="fa-solid fa-question"></i>
                        Help
                    </a>
                </li>
            </ul>
        
           </nav> 
        );
    }
 

export default Homenav;
