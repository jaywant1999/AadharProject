import React, { useState } from "react";
import "../../css/ValidateCandidate.css";
import Axios from "axios";
import AdminSideBar from "./AdminSideBar";

// import "datatables.net";

const ValdidateCandidate = () =>
{
  const [candidateData, setCandidate] = useState([]);
  // const [candidateCurrentStatus, setCandidateStatus] = useState("PENDING");


  const fetchCandidateData = async () => {
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/get/candidate/list`
      );
      console.log(response);
      setCandidate(response.data);
    } catch (error) {
      console.error("Error fetching election:", error);
    }
  };

  const handleFetchCandidate = () => {
    fetchCandidateData();
  };

  const candidateStatus = async(candidateinfo ,status ) => {
    // setCandidateStatus(status);

    const data = {
      AadhaarNumber:candidateinfo.AadhaarNumber ,
      fname: candidateinfo.fname,
      lname: candidateinfo.lname,
      gender: candidateinfo.gender,
      partyname: candidateinfo.partyname,
      status: status
    }

    console.log(data);
    try {
      const updatebody =await Axios.put(`http://127.0.0.1:1234/update/candidate/status`,data);
      console.log(updatebody);
      
    } catch (error) {
      console.log(error);
    }
    
    
  };

  return (
    <>
    <AdminSideBar/>
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
            <th>Status</th>
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
              <td>{candidateinfo.status}</td>
              <td>
                <div id="actions">
                  <button onClick={() => candidateStatus(candidateinfo,"APPROVED")}>
                    Approve
                  </button>
                  <button onClick={() => candidateStatus(candidateinfo,"REJECTED")}>
                    Reject
                  </button>
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

export default ValdidateCandidate;
