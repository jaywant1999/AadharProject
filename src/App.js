 
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import HomeNav from "./components/HomeNav.js";
import About from "./Pages/About.js";
import Admin from "./Pages/Admin.js";
import Candidate from "./Pages/Candidate.js";
import User from "./Pages/User.js";
import Help from "./Pages/HelpPage.js";
import AdminHome from "./Pages/Admin/AdminHome.js";
import UserHomePage from "./Pages/User/UserHomePage.js";
import CandidateHomePage from "./Pages/Candidate/CandidateHomePage.js";

 

 export default function App(){
    return(
        <>
       <div>
 
         <div className="nav">
            <HomeNav/>
        </div>
       
    
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Admin" element={<Admin/>}/>
                    <Route path="/Candidate" element={<Candidate/>}/>
                    <Route path="/User" element={<User/>}/>
                    <Route path="/Help" element={<Help/>}/>
                    <Route path="/AdminHome" element={<AdminHome/>}/>
                    <Route path="/UserHomePage" element={<UserHomePage/>}/>
                    <Route path="/CandidateHomePage" element={<CandidateHomePage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
      
        </div>
        

        
        </>
    );
 };

