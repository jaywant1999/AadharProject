

// HelpPage.js

import '../css/HelpPage.css';
import './Helpinfo1.js';
import './Helpinfo2.js';
import './Helpinfo3.js';


const HelpPage = () => {
  return (
    <div>
        <div className="container">
        <h2>Welcome to the Aadhar-based E-voting system help page</h2>
        <p>If you have any questions or concerns, please refer to the information below:</p>
        </div>
        <div> 
          <a href="/Helpinfo1">
            <div className="help-section" id='hs1'>
              <h2>Getting Started</h2>
              <p>Follow these steps to start using the E-voting system...</p>
            </div>
          </a>

          <a href="/Helpinfo2">
              <div className="help-section" id='hs2'>
                <h2>Aadhar Authentication</h2>
                <p>Learn how to authenticate your Aadhar for a secure voting experience...</p>
              </div>
          </a>

          <a href="Helpinfo3">
            <div className="help-section" id='hs3'>
              <h2>Contact Support</h2>
              <p>If you encounter any issues or have questions, please contact our support team...</p>
              <p>Email: support@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
          </a>
         
        </div>
    </div>
  );
};

export default HelpPage;