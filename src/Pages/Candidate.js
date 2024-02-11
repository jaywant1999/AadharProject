import { useNavigate } from "react-router-dom";

function Candidate() {
  const navigate = useNavigate();
  const goToCandidateHome = () => {
    alert("It will redirect to the candidate home page"); // Show an alert when the button is clicked
    navigate("/CandidateHomePage"); // Navigate to the user home page
  };

  return (
    <>
      <div className=" form-container">
        {" "}
        {/* Wrap the form in a div with class 'form-box' */}
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              // value={formData.firstName}
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              // value={formData.lastName}
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              // value={formData.gender}
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Party Name:
            <input
              type="text"
              name="partyName"
              // value={formData.partyName}
              // onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Upload Party Proof:
            <input
              type="file"
              name="partyProof"
              // onChange={handleFileChange}
            />
          </label>
          <br />
          <label>
            Add Address:
            <input
              type="file"
              name="addressProof"
              // onChange={handleFileChange}
            />
          </label>
          <br />
          <p>
            Already registered?<a href="/CandidateLoginPage">Login Here</a>
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Candidate;
