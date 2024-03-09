import React, { useEffect, useState } from "react";
import Axios from "axios";
import AdminSideBar from "./AdminSideBar";
// import "../../css/Card.css";
import "../../css/CandidateInfoValidate.css";

const CandidateInfoValidate = () => {
  const [formData, setFormData] = useState([]);
  const [filedata, setFileData] = useState([]);

  const fetchData = async () => {
    // e.preventDefault();
    // alert("erff");
    const temp = sessionStorage.getItem("sessionId");
    console.log(temp);
    try {
      const response = await Axios.post(
        `http://127.0.0.1:1234/get/candidate/by/${temp}`
      );
      const filesres = await Axios.post(
        `http://127.0.0.1:1234/candidate/files/${temp}`
      );
      console.log();
      console.log("Hellooooooo", filesres.data);
      // console.log("hiiiiiiiiiii",response);
      // console.log("Only dataaaaaa",response.data);
      setFormData(response.data);
      // console.log(response.data);
      setFileData(filesres.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleDownload = async (fileName, fileType) => {
  //   try {
  //     // Use the correct URL for downloading files
  //     const response = await Axios.get(`http://127.0.0.1:1234/download/${fileName}`, {
  //       responseType: "blob",
  //     });
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", fileName);
  //     document.body.appendChild(link);
  //     link.click();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleCandidateStatus = async (formData, status) => {
    const data = {
      candidateaadhar: formData.candidateaadhar,
      firstname: formData.firstname,
      middlename: formData.middlename,
      lastname: formData.lastname,
      dob: formData.dob,
      profession: formData.profession,
      annualincome: formData.annualincome,
      gender: formData.gender,
      city: formData.city,
      state: formData.state,
      taluka: formData.taluka,
      district: formData.district,
      country: formData.country,
      partyname: formData.partyname,
      pincodeself: formData.pincodeself,
      areapincode: formData.areapincode,
      wardnumber: formData.wardnumber,
      criminalcase: formData.criminalcase,
      mobile: formData.mobile,
      highestqualification: formData.highestqualification,
      status: status,
    };

    try {
      console.log(data);
      const update = await Axios.put(
        `http://127.0.0.1:1234/update/candidate/status`,
        data
      );
    } catch (error) {}
    alert("Your response is submitted successfully!!!");
  };

  console.log("dfgkkgk", formData);
  return (
    <>
      <AdminSideBar />
      <div className="admin-content">
        <div className="validate-main-div">
          <h1>View Candidate Data</h1>
          {/* <div>
            <button className="submit" type="button" onClick={fetchData}>
              View Data
            </button>
          </div> */}
          <form className="c-card">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="inputs">
                <label>{key}</label>
                <input type="text" value={value} readOnly id="input"/>
              </div>
            ))}
            
           
          </form>
          <div id="c-actions">
              <button
                type="button"
                onClick={() => handleCandidateStatus(formData, "APPROVED")}
              >
                Approve
              </button>
              <button
                type="button"
                onClick={() => handleCandidateStatus(formData, "REJECTED")}
              >
                Reject
              </button>
            </div>
        </div>

        <div className="candidate-card">
          {Object.entries(filedata).map(([key, value]) => (
            <div key={key} className="c-content">
              <label>{key}</label>
              <div>:</div>
              <label>{value}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CandidateInfoValidate;
