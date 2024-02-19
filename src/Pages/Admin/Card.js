import React from "react";
import "../../css/Card.css"
import AdminSideBar from "./AdminSideBar";

const Card = () => {
  const candidates = [
    { id: 1, name: "John Doe", party: "BJP", status: "Pending" },
    { id: 2, name: "Jennifer Smith", party: "BJP", status: "Pending" },
    { id: 3, name: "John Smith", party: "Congess", status: "Pending" },
    { id: 4, name: "John Carpenter", party: "BJP", status: "Pending" },
    { id: 5, name: "John Carpenter", party: "BJP", status: "Pending" },
    { id: 6, name: "John Carpenter", party: "BJP", status: "Pending" },
  ];
  return (
    <>
    <AdminSideBar/>
    <div className="adminaddcontainer">
      <div className="card-container">
        {candidates.map((candidate) => (
          <div className="card" key={candidate.id}>
            <a className="c-detailed-info" href="/">
              <div className="card-content">
                <h5 className="candidate-name">Name : {candidate.name}</h5>
                <p className="party">Party name : {candidate.party}</p>
                <p className="status">Status : {candidate.status}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Card;
