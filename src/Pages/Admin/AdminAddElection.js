import React from "react";
import { useState } from "react";
import "../../css/AdminAddElection.css";
import "../Admin/AdminHome.js";
import Axios from "axios";
import AdminSideBar from "./AdminSideBar.js";

const AdminAddElection = () => {
  // State variables to store election details
  const [electionName, setElectionName] = useState("");
  const [electionDate, setElectionDate] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the election object
    const election = {
      electname: electionName,
      electdate: electionDate,
    };
    
    console.log(election);
    // Send the election data to the backend for further processing
    // You can implement this part using Axios or fetch

    // Reset the form fields after submission
    setElectionName("");
    setElectionDate("");

    try {
      console.log(election);
      const response = await Axios.post(
        `http://localhost:1234/addelection/`,
        election
      );
      console.log(response);
    } catch (error) {}

    // Replace this with toast:
    alert("Election added");
    setElectionName("");
    setElectionDate("");
  };

  return (
    <>
      <AdminSideBar />
      <div className="election-container">
        <div className="Addelection-admin ">
          <h2 id="election">Add Election</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="electionName"
                placeholder="Enter Election Name"
                value={electionName}
                onChange={(e) => setElectionName(e.target.value)}
                required
              />
            </div>
            <div>
              <label id="election-date">Enter Election Date :</label>
              <input
                type="date"
                id="electionDate"
                value={electionDate}
                onChange={(e) => setElectionDate(e.target.value)}
                required
              />
            </div>
            <button id="election-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAddElection;
