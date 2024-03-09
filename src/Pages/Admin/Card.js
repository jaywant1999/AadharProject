import React, { useState, useEffect } from "react";
import "../../css/Card.css";
import AdminSideBar from "./AdminSideBar";
import Axios from "axios";

const Card = () => {
  const [candidates, setCandidates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/get/candidateregistration`
      );
      setCandidates(
        response.data.filter((candidate) => candidate.status === "PENDING")
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const setsession =(candidate)=>{
  //   sessionStorage.setItem("sessionId", candidate.candidateaadhar);
  // }

  const setid = (candidate) => {
    console.log("kjsnfsajn", candidate);
    sessionStorage.setItem("sessionId", candidate.candidateaadhar);
  };

  return (
    <>
      <AdminSideBar />
      <div className="adminaddcontainer">
        <div className="card-container">
          {candidates.map((candidate) => (
            <a href={`/CandidateInfoValidate`} key={candidate.candidateaadhar}>
              <div className="card">
                <div className="card-content">
                  <button onClick={() => setid(candidate)}>SELECT</button>
                  <h5 className="candidate-name">
                    Name : {candidate.firstname} {candidate.lastname}
                  </h5>
                  <p className="party">Party name : {candidate.partyname}</p>
                  <p className="status">Status : {candidate.status}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
