import React, { useState, useRef } from "react";
import "../../css/Otp.css";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const navigate = useNavigate();
  const goToCandidateHome = () => {
    navigate("/CandidateRegistration"); // Navigate to the Candidate home page
  };

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  function handleChange(e, index) {
    const { value } = e.target;
    if (isNaN(value)) return false;

    const newOtp = [...otp];
    if (value.length === 1 || value === "") {
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (index > 0 && !value) {
      inputRefs.current[index - 1].focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      alert("OTP Verified: " + enteredOtp);
      goToCandidateHome();
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  }

  function handleResend() {
    alert("OTP Resent!");
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
      const prevInput = inputRefs.current[index - 1];
      prevInput.setSelectionRange(
        prevInput.value.length,
        prevInput.value.length
      );
    }
  };

  return (
    <div className="main-otp">
      <div className="otp-container">
        <h1>OTP Verification</h1>
        <form onSubmit={handleSubmit}>
          <div className="otp-area">
            {otp.map((data, i) => {
              return (
                <input
                  type="text"
                  id="otp-input"
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  value={data}
                  maxLength={1}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="otp-input"
                />
              );
            })}
          </div>

          <button type="submit" id="otp-btn">
            Verify
          </button>

          <div id="otp-resend">
            <a href="" onClick={handleResend}>
              Resend OTP
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
