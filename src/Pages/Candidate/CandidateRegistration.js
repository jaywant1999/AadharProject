import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

const CandidateRegistration = () => {
  const [candidateAadhar, setCandidateAadhar] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [partyName, setPartyName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
  useEffect(() => {
    setCandidateAadhar(sessionStorage.getItem("candidateaadhar")); //Getting saved data from candidate page
  }, []);

  const navigate = useNavigate();

  // const fun = () => {
  //   navigate("/CandidateHomePage");
  // };

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
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      alert("Passwords do not match!");
      return;
    }
    const credential = {
      AadhaarNumber: candidateAadhar,
      password: password,
    };
    try {
      const resp = await Axios.post(
        `http://127.0.0.1:1234/addCandidate`,
        credential
      );
      console.log(resp.data);
    } catch (error) {
      alert(error);
    }

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
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Party Name:
            <input
              type="text"
              name="partyName"
              value={partyName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Upload Party Proof:
            <input type="file" name="partyProof" />
          </label>
          <br />
          <label>
            Add Address:
            <input type="file" name="addressProof" />
          </label>
          <br />
          <label>
            Enter password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Set Password"
              required
            />
          </label>
          <br />
          <label>
            Re-Enter password:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Re-Enter Password"
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CandidateRegistration;
