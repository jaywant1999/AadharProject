import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/CandidateRegistration.css";
import CandidateSideBar from "./CandidateSideBar";

const CandidateRegistration = () => {
  const [candidateAadhar, setCandidateAadhar] = useState("");
  const [formData, setFormData] = useState({
    candidateaadhar: `${candidateAadhar}`,
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    profession: "",
    highestqualification: "",
    annualincome: "",
    gender: "",
    city: "",
    state: "",
    taluka: "",
    pincode: "",
    district: "",
    country: "",
    partyname: "",
    pincodeself: "",
    areapincode: "",
    streetArea: "",
    mobile:"",
    wardnumber: "",
    criminalcase: "",
    password: "",
    confirmPassword: "",
    // incomeProof: null,
    // addressProofFile: null,
    // qualificationCertificateFile: null,
    // partyLetterFile: null,
    // criminalCaseProofFile: null,
  });
  const [incomeCertificate, setIncomeCertificate] = useState(null);
  const [addressCertificate, setAddressCertificate] = useState(null);
  const [partyProofCertificate, setPartyProofCertificate] = useState(null);
  const [criminalCaseProof, setCriminalCaseProof] = useState(null);
  const [education, setEducation] = useState(null);

  ///////////////////////////////////////////////////////////////////////////
  const extractPersonalDetails = () => {
    const {
      candidateaadhar,
      firstname,
      middlename,
      lastname,
      dob,
      profession,
      annualincome,
      gender,
      city,
      state,
      taluka,
      district,
      country,
      partyname,
      pincodeself,
      areapincode,
      wardnumber,
      criminalcase,
      mobile,
      highestqualification,
    } = formData;

    return {
      candidateaadhar:candidateAadhar,
      firstname,
      middlename,
      lastname,
      dob,
      profession,
      annualincome,
      gender,
      city,
      state,
      taluka,
      district,
      country,
      partyname,
      pincodeself,
      areapincode,
      wardnumber,
      criminalcase,
      mobile,
      highestqualification,
    };
  };

  // Function to extract candidate Aadhar and password
  const extractAadharAndPassword = () => {
    const {  password } = formData;
    return { candidateaadhar:candidateAadhar, password };
  };

  // Function to extract document names
  // const extractDocumentNames = () => {
  //   return {
  //     candidateaadhar: formData.candidateaadhar,
  //     incomeProof: "Income Proof",
  //     addressProofFile: "Address Proof Certificate",
  //     qualificationCertificateFile: "Qualification Certificate",
  //     partyLetterFile: "Party Letter",
  //     criminalCaseProofFile: "Criminal Case Clearance Proof",
  //   };
  // };
  //////////////////////////////////////////////////////////////////////////
  ///////////////////
  const personalDetails = extractPersonalDetails();
  const aadharAndPassword = extractAadharAndPassword();
  //  const documentNames = extractDocumentNames();
  ////////////////////////////////////////////////////////////////////////////
  const [error, setError] = useState("");

  useEffect(() => {
    const candidateAadharFromSession = setCandidateAadhar(
      sessionStorage.getItem("candidateaadhar")
    );
    if (candidateAadharFromSession) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        candidateAadhar: candidateAadharFromSession,
      }));
    } else {
      setError("Candidate Aadhar is required.");
    }
  }, []);

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    // if (!validateInputs()) {
    //   return;
    // }

    const formData = new FormData();

    formData.append("incomeCertificate", incomeCertificate);
    formData.append("addressCertificate", addressCertificate);
    formData.append("education", education);
    formData.append("partyProofCertificate", partyProofCertificate);
    formData.append("criminalCaseProof", criminalCaseProof);
    console.log(" formData : ",formData);
    try {
      console.log("Test 1", personalDetails);

      const registercandidate = await Axios.post(
        `http://127.0.0.1:1234/add/candidate/registration/details`,
        personalDetails
      );
      console.log(registercandidate.data);

      console.log("Test ", aadharAndPassword);

      const addcredentials = await Axios.post(
        `http://127.0.0.1:1234/addCandidate`,
        aadharAndPassword
      );
      

      const response = await Axios.post(
        `http://127.0.0.1:1234/file-upload/234567890123`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response);

      navigate("/CandidateHomePage");
    } catch (error) {
      console.log("Error in adding Candidate: ", error);
    }
  };

  const navigate = useNavigate();

  // const fun = () => {
  //   navigate("/CandidateHomePage");
  // };

  const validateInputs = () => {
    setError("");
  };

  //   if (password.trim().length < 6) {
  //     setError("Password must be at least 6 characters long.");
  //     return false;
  //   }
  //   if (!/[A-Z]/.test(password)) {
  //     setError("Password must contain at least one capital letter.");
  //     return false;
  //   }
  //   if (!/[^A-Za-z0-9]/.test(password)) {
  //     setError("Password must contain at least one special character.");
  //     return false;
  //   }
  //   if ((password.match(/\d/g) || []).length < 2) {
  //     setError("Password must contain at least two numbers.");
  //     return false;
  //   }
  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match.");
  //     return false;
  //   }

  //   return true;
  // };

  const checkDeclaration = () => {
    var checkbox = document.getElementById("declarationCheckbox");
    checkbox.checked = true;
  };

  return (
    <>
    <CandidateSideBar/>
      <form onSubmit={handleSubmit} id="c-reg-form">
        <div className="header">
          <h3> Personal Details</h3>
        </div>
        <div id="c-address" className="reg-form-container">
          <div className="block">
            <label>First Name </label>
            <input type="text" id="firstname"  onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              } name="c-firstName" pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Middle Name </label>
            <input type="text" name="c-middleName" 
            onChange={(e) =>
              setFormData({ ...formData, middlename: e.target.value })
            }pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Last Name </label>
            <input type="text" name="c-lastName"
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            } pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Date of Birth </label>
            <input type="date" 
            onChange={(e) =>
              setFormData({ ...formData, dob: e.target.value })
            }name="c-dob" />
          </div>

          <div className="block">
            <label>Aadhaar Number</label>
            <input type="number"
            onChange={(e) =>
              setFormData({ ...formData, candidateaadhar: e.target.value })
            } 
             name="c-aadharnumber" />
          </div>

          <div className="block">
            <label>Profession </label>
            <input type="text" name="c-profession"
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }/>
          </div>

          <div className="block">
            <label>Highest Qualification</label>
            <input type="text" name="c-equcation"
            onChange={(e) =>
              setFormData({ ...formData, highestqualification: e.target.value })
            } />
          </div>

          <div className="block">
            <label>Phone Number</label>
            <input type="number"
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            } 
             name="c-annualIncome" />
          </div>

          <div className="block">
            <label>Annual Income</label>
            <input type="number"
            onChange={(e) =>
              setFormData({ ...formData, annualincome: e.target.value })
            } 
             name="c-annualIncome" />
          </div>

          

          <div className="block">
            <label>Income Certificate</label>
            <input
              id="other"
              type="file"
              onChange={(e) => setIncomeCertificate(e.target.files[0])}
              accept=".pdf"
            />
          </div>

          

           

          <div className="block">
            <label>Qualification Certificate</label>
            <input
              id="other"
              type="file"
              onChange={(e) => setEducation(e.target.files[0])}
              accept=".pdf"
            />
          </div>

          <div className="block">
            <label for="gender">Gender</label>
            <select id="gender" name="c-gender" onChange={handleGenderChange} value={formData.gender} >
              <option value=" " disabled>
                Select your Gender
              </option>
             
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="header">
          <h3> Address Details</h3>
        </div>
        <div id="c-address" className="reg-form-container">
          <div className="block">
            <label>City</label>
            <input type="text" 
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            } name="c-village" pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>State</label>
            <input type="text"
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }  name="c-state" pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Taluka Palce </label>
            <input type="text"
            onChange={(e) =>
              setFormData({ ...formData, taluka: e.target.value })
            }  name="c-taluka" pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Pincode </label>
            <input id="c-pin" type="number"
            onChange={(e) =>
              setFormData({ ...formData, pincodeself: e.target.value })
            }  name="c-pincode" />
          </div>

          <div className="block">
            <label>District Place</label>
            <input type="text" name="c-district"
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            } 
            pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Country </label>
            <input type="text" name="c-country"
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            } 
            pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Address Proof Certificate</label>
            <input
              id="other"
              type="file"
              onChange={(e) => setAddressCertificate(e.target.files[0])}
              accept=".pdf"
            />
          </div>
        </div>

        <div className="header">
          <h3> Area For Which Candidate Want to Enroll as Elector</h3>
        </div>

        <div id="c-election" className="reg-form-container">
          <div className="block">
            <label>Party name</label>
            <input type="text" name="c-party-name"
            onChange={(e) =>
              setFormData({ ...formData, partyname: e.target.value })
            } 
            pattern="[A-Za-z]*" />
          </div>

          <div className="block">
            <label>Pincode </label>
            <input type="number" 
            onChange={(e) =>
              setFormData({ ...formData, areapincode: e.target.value })///////////////////////////////////////////////////
            } 
            name="c-pincode" />
          </div>

          

          <div className="block">
            <label>Party Letter</label>
            <input
              id="other"
              type="file"
              onChange={(e) => setPartyProofCertificate(e.target.files[0])}
              accept=".pdf"
            />
          </div>

          <div className="block">
            <label>Ward No. </label>
            <input type="number"
            onChange={(e) =>
              setFormData({ ...formData, wardnumber: e.target.value })
            }
            name="c-ward-no" />
          </div>

          <div className="block">
            <label>Number Of Criminal Cases</label>
            <input id="c-criminal" type="number"
            onChange={(e) =>
              setFormData({ ...formData, criminalcase: e.target.value })
            } name="c-criminal-cases" />
          </div>

          <div className="block">
            <label>Clearance Proof From Police Station </label>
            <input
              id="other"
              type="file"
              onChange={(e) => setCriminalCaseProof(e.target.files[0])}
              accept=".pdf"
            />
          </div>
        </div>

        <div className="header">
          <h3> Set Password</h3>
        </div>
        <div id="c-election" className="reg-form-container">
          <div className="block">
            <label>Enter Password</label>
            <input
              type="password"
              name="c-password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="block">
            <label>Confirm Password</label>
            <input
              type="password"
              name="c-confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="c-error">
            {error && <p className="error">{error}</p>}

            <ul id="c-error">
              <li>At least 6 characters long</li>
              <li>Contains at least one capital letter</li>
              <li>Contains at least one special character</li>
              <li>Contains at least two numbers</li>
            </ul>
          </div>
        </div>

        <label id="declaration" htmlFor="declarationCheckbox">
          "I, hereby declare that all the information submitted by me in the
          application form is correct, true, and valid. I will present the
          supporting documents as and when required."
        </label>
        <input
          type="checkbox"
          id="declarationCheckbox"
          name="declarationCheckbox"
        />
        <br />

        <button
          id="c-sub-btn"
          type="submit"
          name="c-submit"
          onClick={checkDeclaration}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CandidateRegistration;
