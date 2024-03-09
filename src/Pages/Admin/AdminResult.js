import React from 'react'
import { useEffect, useState } from "react";
import Axios from "axios";
import AdminSideBar from "./AdminSideBar";
import '../../css/AdminResult.css'

const AdminResult = () => {
    const [count, setCount] = useState([]);
    const [winner, setWinner] = useState(null);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:1234/votingresult`);
        setCount(response.data.counts);
        findWinner(response.data.counts);
        console.log(count);
      } catch (error) {}
    };
  
  
  
    const findWinner = (counts) => {
      if (counts.length === 0) return;
      let maxCount = counts[0].count;
      let winnerCandidate = counts[0];
      for (let i = 1; i < counts.length; i++) {
        if (counts[i].count > maxCount) {
          maxCount = counts[i].count;
          winnerCandidate = counts[i];
        }
      }
      setWinner(winnerCandidate);
    };
  return (
     <>
     <AdminSideBar/>
     <div className="candidate-welcomepage">
        <div className="voting-result">
          <h1>Welcome Admin..know the result</h1>
          <p className="welcome-text">
            <h3>Voting Result:</h3>
          </p>
          <ul className="results">
            {count.map((candidate) => (
              <li id="list" key={candidate.candidateid}>
                <hr />
                <h4>
                  Candidate ID: {candidate.candidateid} | Count:{" "}
                  {candidate.count}{" "}
                </h4>{" "}
                <hr />
              </li>
            ))}
          </ul>
          {winner && (
            <div className="results">
              <h3>Winner:</h3>
              <p id="list">
                <h4>Candidate ID: {winner.candidateid} | Count: {winner.count}</h4>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AdminResult;