import React, { useState } from "react";
import "../../css/ValidateCandidate.css";
import Axios from "axios";

// import "datatables.net";

const ValdidateCandidate = () => {
  const [candidateData, setCandidate] = useState([]);

  const fetchCandidateData = async () => {
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/get/candidate/list`
      );
      setCandidate(response.data);
    } catch (error) {
      console.error("Error fetching election:", error);
    }
  };

  const handleFetchCandidate = () => {
    fetchCandidateData();
  };

  return (
    <div class="admin-table-container">
      <h1>Candidate Validation</h1>
      <div>
        <button className="submit" type="button" onClick={handleFetchCandidate}>
          Show
        </button>
      </div>
      <table id="basic-data-table" class="table nowrap">
        <thead>
          <tr>
            <th>Cadndiate ID</th>
            <th>Cadndiate name</th>
            <th>Candidate last name</th>
            <th>Gender</th>
            <th>Party Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {candidateData.map((candidateinfo) => (
            <tr key={candidateinfo.AadhaarNumber}>
              <td>{candidateinfo.AadhaarNumber}</td>
              <td>{candidateinfo.fname}</td>
              <td>{candidateinfo.lname}</td>
              <td>{candidateinfo.gender}</td>
              <td>{candidateinfo.partyname}</td>
              <td>
                <div id="actions">
                  <button>Approve</button>
                  <button>Reject</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValdidateCandidate;
