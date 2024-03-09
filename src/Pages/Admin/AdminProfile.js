import React from 'react';
import '../../css/AdminProfile.css'; // Assuming you have a separate CSS file for Admin Profile styling
import AdminSideBar from './AdminSideBar';

const AdminProfile = () => {
  const adminData = {
    name: "Admin",
    role: "Administrator",
    email: "admin@gmail.com",
    mobileNumber: "+91 9370048569",
  };

  return (
    <>
    <AdminSideBar/>
    <div className="admin-profile-container">
      <div className="profile-box">
        <h2>Admin Profile</h2>
        <table className="profile-table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{adminData.name}</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>{adminData.role}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{adminData.email}</td>
            </tr>
            <tr>
              <td>Mobile Number:</td>
              <td>{adminData.mobileNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default AdminProfile;