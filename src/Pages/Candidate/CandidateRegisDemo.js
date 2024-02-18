import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
// import "../../css/CandidateRegisDemo.css";

const CandidateRegisDemo = () => {
  const [candidateAadhar, setCandidateAadhar] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [partyName, setPartyName] = useState("");

  useEffect(() => {
    setCandidateAadhar(sessionStorage.getItem("candidateaadhar")); //Getting saved data from candidate page
  }, []);

  const navigate = useNavigate();

  const fun = () => {
    navigate("/CandidateHomePage");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstname(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "partyName":
        setPartyName(value);
        break;
      default:
        break;
    }
  };

  const checkDeclaration=()=> {
    var checkbox = document.getElementById("declarationCheckbox");
    checkbox.checked = true;
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const candidateData = {
      AadhaarNumber: candidateAadhar,
      fname: firstname,
      lname: lastName,
      gender: gender,
      partyname: partyName,
    };
    try {
      console.log(candidateData);
      const response = await Axios.post(
        "http://127.0.0.1:1234/addDummyCandidate",
        candidateData
      );
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.log("Error in adding Candidate : ", error);
    }

    navigate("/CandidateHomePage");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <hr />
        <h3> Personal Details</h3>
        <hr />
        <div className="reg-form-container">
          <div className="reg-sub-container">
            <label>
              First Name
              <input type="text" name="c-firstName" />
            </label>

            <label>
              Date of Birth
              <input type="text" name="c-dob" />
            </label>

            <label>
              Highest Qualification
              <input type="text" name="c-state" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              Middle Name
              <input type="text" name="partyName" />
            </label>

            <label for="gender">Gender</label>
            <select id="gender" name="c-gender">
              <option value=" " disabled>
                Select your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label>
              Degree/ Certificate of Qualification
              <input id="other" type="file" name="c-state" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              Last Name
              <input type="text" name="c-lastName" />
            </label>

            <label>
              Annual Income
              <input type="text" name="c-annualIncome" />
            </label>

            <label>
              Profession
              <input type="text" name="c-lastName" />
            </label>
          </div>
        </div>

        <hr />
        <h3> Address Details</h3> <hr />
        <div id="c-address" className="reg-form-container">
          <div className="reg-sub-container">
            <label>
              Village/Town/City
              <input type="text" name="c-village" />
            </label>

            <label>
              State
              <input type="text" name="c-state" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              Taluka Palce
              <input type="text" name="c-taluka" />
            </label>

            <label>
              Pincode
              <input id="c-pin" type="number" name="c-pincode" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              District Palce
              <input type="text" name="c-district" />
            </label>

            <label>
              Country
              <input type="text" name="c-country" />
            </label>
          </div>
        </div>
        <hr />
        <h3> Area For Which Candidate Want to Enroll as Elector</h3>
        <hr />
        <div id="c-election" className="reg-form-container">
          <div className="reg-sub-container">
            <label>
              Party name
              <input type="text" name="c-village" />
            </label>

            <label>
              Pincode
              <input type="text" name="c-village" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              Street
              <input type="text" name="c-village" />
            </label>

            <label>
              Party Letter
              <input id="other" type="file" name="c-village" />
            </label>
          </div>

          <div className="reg-sub-container">
            <label>
              Ward No.
              <input type="text" name="c-village" />
            </label>

            <label>
              Criminal Cases
              <input id="c-criminal" type="number" name="c-village" />
            </label>
          </div>
        </div>
        <label for="declarationCheckbox">
          "I, hereby declare that all the information
          submitted by me in the application form is correct, true, and valid. I
          will present the supporting documents as and when required."
        </label>
        <input
          type="checkbox"
          id="declarationCheckbox"
          name="declarationCheckbox"
        /><br/>
        <button id="c-sub-btn" type="submit" name="c-submit" onClick={checkDeclaration}>
          Submit
        </button>
        
      </form>
    </>
  );
};

export default CandidateRegisDemo;