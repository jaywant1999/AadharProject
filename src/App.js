 
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import HomeNav from "./components/HomeNav.js";
import About from "./Pages/About.js";
import Admin from "./Pages/Admin.js";
import Candidate from "./Pages/Candidate.js";
import User from "./Pages/User.js";
// import { User } from "./Pages/User.js";
import Help from "./Pages/HelpPage.js";
import AdminHome from "./Pages/Admin/AdminHome.js";
import UserHomePage from "./Pages/User/UserHomePage.js";
import CandidateHomePage from "./Pages/Candidate/CandidateHomePage.js";
<<<<<<< HEAD
import UserOtp from "./Pages/User/UserOtp.js"
import CandidateOtp from "./Pages/Candidate/CandidateOtp.js"
=======
import UserOtp from "./Pages/User/UserOtp.js";
import SetUserPassword from "./Pages/User/SetUserPassword.js";
>>>>>>> 67f3b391810218610d07f322e4cd8a91b4fff099
 

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
                    <Route path="/UserOtp" element={<UserOtp/>}/>
                    <Route path="/UserHomePage" element={<UserHomePage/>}/>
                    <Route path="/CandidateOtp" element={<CandidateOtp/>}/>
                    <Route path="/CandidateHomePage" element={<CandidateHomePage/>}/>
                    <Route path="/UserOtp" element={<UserOtp/>}/>
                    <Route path="/SetUserPassword" element={<SetUserPassword/>}/>

                </Routes>
            </BrowserRouter>
        </div>
      
        </div>
        

        
        </>
    );
 };

