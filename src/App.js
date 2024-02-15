import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import CandidateOtp from "./Pages/Candidate/CandidateOtp.js";
import UserOtp from "./Pages/User/UserOtp.js";
import SetUserPassword from "./Pages/User/SetUserPassword.js";
import UserLogin from "./Pages/User/UserLogin.js";
import CandidateLoginPage from "./Pages/Candidate/CandidateLoginPage";
import CandidateRegistration from "./Pages/Candidate/CandidateRegistration.js"
import UserAddElection from "./Pages/User/UserAddElection.js"
import AdminAddElection from "./Pages/Admin/AdminAddElection.js"
import ValidateCandidate from "./Pages/Admin/ValidateCandidate"
import UserVotingPage from  './Pages/User/UserVotingPage'
import UserProfile from  "./Pages/User/UserProfile.js";
import AdminProfile from "./Pages/Admin/AdminProfile.js";

export default function App() {
  return (
    <>
      <div>
        <div className="nav">
          <HomeNav />
        </div>

        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Candidate" element={<Candidate />} />
              <Route path="/User" element={<User />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/AdminHome" element={<AdminHome />} />
              <Route path="/UserOtp" element={<UserOtp />} />
              <Route path="/UserHomePage" element={<UserHomePage />} />
              <Route path="/CandidateOtp" element={<CandidateOtp />} />
              <Route path="/UserVotingPage" element={<UserVotingPage />} />
              <Route path="/CandidateHomePage" element={<CandidateHomePage />} />
              <Route path="/CandidateRegistration" element={<CandidateRegistration />} />
              <Route path="/UserOtp" element={<UserOtp />} />
              <Route path="/SetUserPassword" element={<SetUserPassword />} />
              <Route path="/UserLogin" element={<UserLogin />} />
              <Route path="/UserAddElection" element={<UserAddElection />} />
              <Route path="/AdminAddElection" element={<AdminAddElection />} />
              <Route path="/ValidateCandidate" element={<ValidateCandidate />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/AdminProfile" element={<AdminProfile />} />
              <Route path="/CandidateLoginPage" element={<CandidateLoginPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}
