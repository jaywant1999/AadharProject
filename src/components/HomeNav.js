import { useState } from "react";
import "../css/HomeNav.css";
import voter from "../images/votehand.png"
 

 function Homenav(){ 
     
    const [menuOpen, setMenuOpen] = useState(false);
    
        return(
           <nav className="NavbarItems">
            <div className="logocontent"><img id="img1" src={voter}/><h1 className="Navbar-logo">मेरा देश, <br/>मेरा चुनाव ...</h1></div>
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
                    <a className="links" href ="/About" >
                        <i class="fa-solid fa-circle-info"/>
                        About 
                    </a>
                </li>
               
                <li>
                    <a className="links" href="/Admin">
                        <i class="fa-solid fa-user-tie"></i>
                        Admin 
                    </a>
                </li>
                
                <li>
                    <a className="links" href="/Candidate">
                        <i class="fa-solid fa-user-large"></i>
                        Candidate 
                    </a>
                </li> 
                
                <li>
                    <a className="links" href="/User">
                        <i class="fa-solid fa-users-line"></i>
                        User 
                    </a>
                </li>

                <li>
                    <a className="links" href="/Help">
                    <i class="fa-solid fa-question"></i>
                        Help
                    </a>
                </li>
            </ul>
        
           </nav> 
        );
    }
 

export default Homenav;
