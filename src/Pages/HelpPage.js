import '../css/HelpPage.css';
import { useState } from 'react';

const HelpPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
    
  // Sample help data
  const helpData = {
  userHelp: [
      "How to register as a user?",
      "How to log in?",
      "How to update profile information?",
  ],
  adminHelp: [
      "How to access admin dashboard?",
      "How to validate candidates?",
      "How to view statistics?",
  ],
  candidateHelp: [
      "How to register as a candidate?",
      "How to set password after admin approval?",
      "How to update candidate profile?",
  ]
  };

// Function to handle click on help item
const handleItemClick = (item) => {
setSelectedItem(item);
};
  return (
    <div className="help-page">
        <h1>Help Page</h1>
        <div className="help-container">
          <div className="help-section">
            <h2>User Help</h2>
            <ul>
              {helpData.userHelp.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="help-section">
            <h2>Admin Help</h2>
            <ul>
              {helpData.adminHelp.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="help-section">
            <h2>Candidate Help</h2>
            <ul>
              {helpData.candidateHelp.map((item, index) => (
                <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="selected-item">
          <h2>Here is guide for you</h2>
          <p>{selectedItem}</p>
        </div>
      </div>
    
  );
};

export default HelpPage;