import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import UserSideBar from "./UserSideBar";
import "../../css/UserVotingPage.css";

const UserVotingPage = () => {
  const navigate = useNavigate();
  const [aadhar, setAaadhar] = useState("");

  useEffect(() => {
    fetchData();
    setAaadhar(sessionStorage.getItem("aadhar"));
  }, []);

  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
   
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/get/candidate/list`
      );
      // Filter candidates whose status is "APPROVED"
      const approvedCandidates = response.data.filter(
        (candidate) => candidate.status === "APPROVED"
      );
      setTableData(approvedCandidates);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const addYourVote = async (candidate) => {
    const votingbody = {
      Userid: aadhar,
      Candidateid: candidate.candidateaadhar,
    };
    // console.log(votingbody);
    try {
      const checkStatus = await Axios.post(
        `http://127.0.0.1:1234/check/if/already/voted`, //It will check for  the user if he has already voted or not
        votingbody
      );

      // console.log(checkStatus.data.msg);

      if (checkStatus.data.auth) {
        const votedata = await Axios.post(
          `http://127.0.0.1:1234/add/your/vote`, //It will cast the vote  for user with AADHAR number stored in session
          votingbody
        );
        if(votedata.data.parameters === null){
          alert('Login not detected. Please login first!!!');
          navigate("/UserWelcomePage");
        }
        alert("Voted Successfully");
        navigate("/");
      } else {
        alert("You have already Voted!");
        navigate("/");
      }

      sessionStorage.clear(); // It will clear  all the values stored in the session storage of browser
    } catch (error) {
      // console.log("Error in adding vote : ", error);
    }
  };

  return (
    <>
      <UserSideBar />
      <div className="UserVoting-table-container">
        <h1>Voting Table</h1>
        <table id="basic-data-table" className="table nowrap">
          {/* <button onClick={fetchData}>Fetch</button> */}
          <thead>
            <tr>
              <th>Candidate ID</th>
              <th>Candidate Name</th>
              <th>Party Name</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((candidate) => (
              <tr key={candidate.candidateaadhar}>
                <td>{candidate.candidateaadhar}</td>
                <td>{candidate.firstname}</td>
                <td>{candidate.partyname}</td>
                <td>
                  <div id="actions">
                    <button onClick={() => addYourVote(candidate)}>Vote</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserVotingPage;
