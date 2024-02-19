import React from 'react'
import '../../css/Help.css'
import UserSideBar from './UserSideBar'

const UserHelp=()=> {
  return (
    <>
    <UserSideBar/>
    <div className='guide-container'>
            <h1>User Guide</h1>
            <p>Welcome to the user help! This page provides you with an overview of the features available to you.</p>
           <div className='help-tabs'>
            <a href="#">
                <div className='guide-div'>
                    <h3>Navigation</h3>
                    <p>Use the sidebar to navigate between different sections of the dashboard, such as viewing your profile, selecting an election, and voting for a candidate.</p>
                </div>
            </a>

            <a href="#">
                <div className='guide-div'>
                    <h3>Profile</h3>
                    <p>In the profile section, you can view  your personal information, such as your name and general details.</p>
                </div>
            </a>


            <a href="#">
                <div className='guide-div'>
                    <h3>Election Selection</h3>
                    <p>Use the election selection feature to choose the election in which you wish to participate.</p>
                </div>
            </a>


            <a href="#">
                <div className='guide-div'>
                    <h3>Voting</h3>
                    <p>Once you have selected an election, you can cast your vote for the candidate of your choice.</p>
                </div>
            </a>

            <a href="#">
                <div className='guide-div'>
                    <h3>Logout</h3>
                    <p>Click on the logout button to securely log out of your account and exit the dashboard.</p>

                </div>
            </a>
            </div>

        </div>
        </>
  )
}

export default UserHelp;