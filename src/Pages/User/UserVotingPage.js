import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const UserVotingPage = () => {

  useEffect(() => {
    fetchData();
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
      console.log(response);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 

  return (
    <div className="UserVoting-table-container">
      <h1>Voting Table</h1>
      <table id="basic-data-table" className="table nowrap">
        {/* <button onClick={fetchData}>Fetch</button> */}
        <thead>
          <tr>
            <th>Candidate ID</th>
            <th>Candidate Name</th>
            <th>Party Name</th>
            <th>Status</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((candidate) => (
            <tr key={candidate.AadhaarNumber}>
              <td>{candidate.AadhaarNumber}</td>
              <td>{candidate.fname}</td>
              <td>{candidate.partyname}</td>
              <td>{candidate.status}</td>
              <td>
                <div id="actions">
                  <button>Vote</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserVotingPage;
