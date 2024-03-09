import React, { useState, useEffect } from "react";
import "../../css/UserAddElection.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import UserSideBar from "./UserSideBar";

const UserAddElection = () => {
  const navigate = useNavigate();
  const [elections, setElections] = useState([]); // Array of election objects

  const fetchElection = async () => {
    try {
      const response = await Axios.get("http://127.0.0.1:1234/get/election/list");
      setElections(response.data); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching election:", error);
    }
  };



  const selectElection=()=>{
    navigate('/UserVotingPage');
  }

  useEffect(() => {
    fetchElection();
  }, []);

  return (
    <>
    <UserSideBar/>
    <div className="election-container1">
      <div className="UserAddElection">
        <h2>Select Election</h2>
        <div className="election-table-container">
          <h3>Election List</h3>
          <table className="election-table">
            <thead>
              <tr>
                {/* <th>Elect ID</th> */}
                <th>Election Name</th>
                <th>Election Date</th>
                <th>Select Election</th>
              </tr>
            </thead>
            <tbody>
              {elections.map(election => (
                <tr key={election.electid}>
                  {/* <td>{election.electid}</td> */}
                  <td>{election.electname}</td>
                  <td>{election.electdate}</td>
                  <button
                  onClick={selectElection}>Select</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
);
};

export default UserAddElection;
