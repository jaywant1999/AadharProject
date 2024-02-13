import React from "react";
import '../../css/CandidateLoginPage.css'

const CandidateLoginPage = () => {
  return (
    <div>
      <div className="form-container">
        <form>
          <h2>Candidate Login</h2>
          <label>
            Aadhar Number:
            <input
              type="text"
              name="aadharNumber"
              //   value={formData.aadharNumber}
              //   onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              //   value={formData.password}
              //   onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          <p>
            Not registered?<a href="/Candidate">SignUp Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CandidateLoginPage;
