import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../../css/CandidateRegistration.css";

const CandidateRegistration = () => {
  const navigate = useNavigate();


  const [candidateAadhar, setCandidateAadhar] = useState("");
  const [formData, setFormData] = useState({
    candidateaadhar: candidateAadhar,
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    profession: "",
    highestqualification: "",
    annualincome : 0,
    gender: "",
    city: "",
    state: "",
    taluka: "",
    district: "",
    country: "",
    partyname: "",
    pincodeself: "",
    areapincode: "",
    wardnumber : 0,
    criminalcase : 0,
    password: "",
    confirmPassword: "",
    mobile : 0,
  });

const [firstname, setFirstname] = useState("");
const [middlename, setMiddlename] = useState("");
const [lastname, setLastname] = useState("");
const [dob, setDob] = useState("");
const [profession, setProfession] = useState("");
const [highestqualification, setHighestqualification] = useState("");
const [annualincome, setAnnualincome] = useState(0);
const [gender, setGender] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [taluka, setTaluka] = useState("");
const [district, setDistrict] = useState("");
const [country, setCountry] = useState("");
const [partyname, setPartyname] = useState("");
const [pincodeself, setPincodeself] = useState("");
const [areapincode, setAreapincode] = useState("");
const [wardnumber, setWardnumber] = useState(0);
const [criminalcase, setCriminalcase] = useState(0);
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [mobile, setMobile] = useState(0);

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
      candidateaadhar: candidateAadhar,
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
    const { password } = formData;
    return { AadhaarNumber: candidateAadhar, password:confirmPassword};
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    // if (!validateInputs()) {
    //   return;
    // }

    const myObj = {
      candidateaadhar: candidateAadhar,
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
    }

    console.log("Mydataaaaaaaa : ",myObj);

    const formData = new FormData();

    formData.append("incomeCertificate", incomeCertificate);
    formData.append("addressCertificate", addressCertificate);
    formData.append("education", education);
    formData.append("partyProofCertificate", partyProofCertificate);
    formData.append("criminalCaseProof", criminalCaseProof);
    console.log(" formData : ", formData);
    try {
      console.log("Test 1", personalDetails);

      const registercandidate = await Axios.post(
        `http://127.0.0.1:1234/add/candidate/registration/details`,
        myObj
      );
      console.log("1234",myObj);

      // console.log("Test ", aadharAndPassword);

      const addcredentials = await Axios.post(
        `http://127.0.0.1:1234/addCandidate`,
        aadharAndPassword
      );
        console.log("3456",aadharAndPassword);
      const response = await Axios.post(
        `http://127.0.0.1:1234/file-upload/${candidateAadhar}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("5678",formData);

      // navigate("/CandidateHomePage");
    } catch (error) {
      console.log("Error in adding Candidate: ", error);
    }
  };

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
  };

  //function on personal details form:
 

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
    alert("Your application submitted successfully!!!");
    // navigate('/CandidateLoginPage');
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="c-reg-form">
        <div className="header">
          <h3> Personal Details</h3>
        </div>
        <div id="c-address" className="reg-form-container">
          <div className="block">
            <label disabled>First Name </label>
            <input
              type="text"
              id="firstname"
              onChange={(e) =>
                setFirstname(e.target.value)
              }
              name="c-firstName"
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Middle Name </label>
            <input
              type="text"
              name="c-middleName"
              onChange={(e) =>
                setMiddlename(e.target.value)
              }
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Last Name </label>
            <input
              type="text"
              name="c-lastName"
              onChange={(e) =>
                setLastname(e.target.value)
              }
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Date of Birth </label>
            <input
              type="date"
              onChange={(e) =>
                setDob(e.target.value)
              }
              name="c-dob"
            />
          </div>

          <div className="block">
            <label>Profession </label>
            <input
              type="text"
              name="c-profession"
              onChange={(e) =>
                setProfession(e.target.value)
              }
            />
          </div>

          <div className="block">
            <label>Highest Qualification</label>
            <input
              type="text"
              name="c-equcation"
              onChange={(e) =>
                setHighestqualification(e.target.value)
              }
            />
          </div>

          <div className="block">
            <label>Phone Number</label>
            <input
              type="number"
              onChange={(e) =>
                setMobile(e.target.value)
              }
              name="c-annualIncome"
            />
          </div>

          <div className="block">
            <label>Annual Income</label>
            <input
              type="number"
              onChange={(e) =>
                setAnnualincome(e.target.value)
              }
              name="c-annualIncome"
            />
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
            <select
              id="gender"
              name="c-gender"
              onChange={(e)=>  setGender(e.target.value)}
              value={gender}
            >
              <option value=" " disabled>
                Select your Gender
              </option>
              <option value="select">Select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
        </div>

        <div className="header">
          <h3> Address Details</h3>
        </div>
        <div id="c-address" className="reg-form-container">
          <div className="block">
            <label>City</label>
            <input
              type="text"
              onChange={(e) =>
                setCity(e.target.value)
              }
              name="c-village"
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>State</label>
            <input
              type="text"
              onChange={(e) =>
                setState(e.target.value)
              }
              name="c-state"
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Taluka Palce </label>
            <input
              type="text"
              onChange={(e) =>
                setTaluka(e.target.value)
              }
              name="c-taluka"
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Pincode </label>
            <input
              id="c-pin"
              type="number"
              onChange={(e) =>
                setPincodeself(e.target.value)
              }
              name="c-pincode"
            />
          </div>

          <div className="block">
            <label>District Place</label>
            <input
              type="text"
              name="c-district"
              onChange={(e) =>
                setDistrict(e.target.value)
              }
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Country </label>
            <input
              type="text"
              name="c-country"
              onChange={(e) =>
                setCountry(e.target.value)
              }
              pattern="[A-Za-z]*"
            />
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
            <input
              type="text"
              name="c-party-name"
              onChange={(e) =>
                setPartyname(e.target.value)
              }
              pattern="[A-Za-z]*"
            />
          </div>

          <div className="block">
            <label>Pincode </label>
            <input
              type="number"
              onChange={
                (e) =>  setAreapincode(e.target.value) ///////////////////////////////////////////////////
              }
              name="c-pincode"
            />
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
            <input
              type="number"
              onChange={(e) =>
                setWardnumber(e.target.value)
              }
              name="c-ward-no"
            />
          </div>

          <div className="block">
            <label>Number Of Criminal Cases</label>
            <input
              id="c-criminal"
              type="number"
              onChange={(e) =>
                setCriminalcase(e.target.value)
              }
              name="c-criminal-cases"
            />
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
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div className="block">
            <label>Confirm Password</label>
            <input
              type="password"
              name="c-confirmPassword"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
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