
import '../css/HelpPage.css';
import { useState } from 'react';

const HelpPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample help data
  const helpData = {
    userHelp: [
      "Who is the user?",
      "How do I register as a user?",
      "How do I log in?",
    ],

    candidateHelp: [
      "Who is the Candidate?",
      "How do I register as a candidate?",
      "How do I log in as a candidate?",

    ],
    adminHelp: [
      "Who is the Admin?",
      "How do I log in as an admin?",
    ]
  };

  // Function to handle click on help item
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Render the help item content based on the selected item
  const renderHelpContent = () => {
    if (!selectedItem) {
      return null;
    }

    let content = null;

    switch (selectedItem) {
      case "Who is the user?":
        content = (
          <div>
            <h2>Who is the user?</h2>
            <p>A registered voter who is eligible to participate in the voting process.</p>
            <p>The user is the one who can cast their vote for a candidate running in an election.</p>
          </div>
        );
        break;

      case "How do I register as a user?":
        content = (
          <div>
            <h2>User Registration Process:</h2>
            <p>1. Click on the user option on the home page.</p>
            <p>2. Go to the registration page.</p>
            <p>3. Enter your Aadhaar number carefully, ensuring it is accurate.</p>
            <p>4. An OTP will be sent to your registered email.</p>
            <p>5. Enter necessary details.</p>
            <p>6. Set a password to access the portal.</p>
            <p>7. Complete the registration process.</p>
          </div>
        );
        break;

      case "How do I log in?":
        content = (
          <div>
            <h2>How do I log in?:</h2>
            <p>1. Click on the user option on the home page.</p>
            <p>2. Go to the login page.</p>
            <p>3. Enter your correct Aadhaar number and password.</p>
            <p>4. Click on the login button.</p>
            <p>5. You will be redirected to the user dashboard.</p>
          </div>
        );
        break;




      case "Who is the Candidate?":
        content = (
          <div>
            <h2>Who is the Candidate?</h2>
            <p>A candidate is a person who has enrolled to participate as a contestant in an election.</p>
            <p>Candidates play a vital role in the democratic process by offering themselves for election and presenting their platform to voters.</p>
          </div>
        );
        break;



      case "How do I register as a candidate?":
        content = (
          <div>
            <h2>Candidate Registration Process:</h2>
            <p>1. Click on the candidate option on the home page.</p>
            <p>2. Go to the registration page.</p>
            <p>3. Enter your Aadhaar number carefully, ensuring it is accurate.</p>
            <p>4. An OTP will be sent to your registered email.</p>
            <p>5. Enter necessary details and upload necessary files for admin to verify.</p>
            <p>6. Set a password to access the portal.</p>
            <p>7. Complete the registration process.</p>
          </div>
        );
        break;

      case "How do I log in as a candidate?":
        content = (
          <div>
            <h2>How do I log in as a candidate:</h2>
            <p>1. Navigate to the candidate login page.</p>
            <p>2. Enter your candidate credentials (username and password).</p>
            <p>3. Click on the login button.</p>
            <p>4. You will be redirected to the candidate dashboard.</p>
          </div>
        );
        break;

      case "Who is the Admin?":
        content = (
          <div>
            <h2>Who is the Admin?</h2>
            <p>An admin is a designated individual who has the authority to manage and oversee the e-voting system.</p>
            <p>The admin is responsible for tasks such as verifying candidate registrations, monitoring the voting process, and ensuring the integrity of the election.</p>
          </div>
        );
        break;

      case "How do I log in as an admin?":
        content = (
          <div>
            <h2>How do I log in as an admin:</h2>
            <p>1. Navigate to the admin login page.</p>
            <p>2. Enter your admin credentials (username and password).</p>
            <p>3. Click on the login button.</p>
            <p>4. You will be redirected to the admin dashboard.</p>
          </div>
        );
        break;



      default:
        content = null;
        break;
    }

    return content;
  };

  return (
    <div className="help-page">
      <div className="help-container">
        <div className="help-section">
          <h2>User Q&A</h2>
          <ul>
            {helpData.userHelp.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="help-section">
          <h2>Admin Q&A</h2>
          <ul>
            {helpData.adminHelp.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="help-section">
          <h2>Candidate Q&A</h2>
          <ul>
            {helpData.candidateHelp.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div id='select-main'>
      <div className="selected-items">
        <h2>Click on the above questions to get the answers.</h2>
         
        {renderHelpContent()}
      </div>
      </div>
    </div>
  );
};

export default HelpPage;