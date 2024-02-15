import React from 'react';
import '../../css/UserProfile.css';

const UserProfile = () => {//We have to display all dynamic data from aadhar database
  const userData = {
    aadharNumber: "1234 5678 9012",
    name: "John Doe",
    address: "123 Main St, City, Country",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    gender: "Male",
    mobileNumber: "+1234567890",
  };
  // const [userData, setUserData] = useState(null); 

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        <table className="profile-table">
          <tbody>
            <tr>
              <td>Aadhar Number:</td>
              <td>{userData.aadharNumber}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{userData.address}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>{userData.dob}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{userData.gender}</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>{userData.mobileNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserProfile;