import React from 'react'
import "../../css/Help.css"
import AdminSideBar from './AdminSideBar';
const AdminHelp = ()=> {
  return (
    <>
    <AdminSideBar/>
    <div className='guide-container'>
    <h1>Admin Guide</h1>
    <h5>Welcome, Admin!</h5>
    <p>Here's a guide to help you navigate the dashboard and manage the e-voting system effectively.</p>
    

    <div className='guide-div'>
        <h3>View Profile</h3>
        <p>Click on the profile tab to view your admin profile. You can update your profile information if needed.</p>
    </div>
    <div className='guide-div'>
        <h3>Add Election</h3>
        <p>Click on the "Add Election" button to create a new election. Fill in the required details such as the election name, date, and any other relevant information.</p>
    </div>
    <div className='guide-div'>
        <h3>View Statistics</h3>
        <p>You can view the live  results by clicking on the results tab. Results will be displayed using charts and graphs for easy understanding.</p>
    </div>
    <div className='guide-div'>
        <h3>Validation of Candidates</h3>
        <p>Validate candidates by reviewing their details and verifying their eligibility to participate in the election.</p>
    </div>
    {/* <div className='guide-div'>
        <h3>View Results</h3>
        <p> You can view the live  results by clicking on the results tab. Results will be displayed using charts and graphs for easy understanding.</p>
    </div> */}
</div>
</>
  )
}

export default AdminHelp;