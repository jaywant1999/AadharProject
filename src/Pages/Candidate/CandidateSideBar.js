import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/AdminSidebar.css";

const CandidateSideBar=({children})=>{

    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
     
    const menuItem=[
        {
            path:"/CandidateProfile",
            name:"Profile",
            icon:<i class="fa-solid fa-address-card"/>
        },        
        {
            path:"/CandidateStatus",
            name:"Status",
            icon:<i class="fa-solid fa-envelope-open"/>
        },
        {
            path:"/CandidateHelp",
            name:"Help",
            icon:<i class="fa-solid fa-circle-question"/>
        },
        {
            path:"/CandidateWelcomePage",
            name:"Logout",
            icon:<i class="fa-solid fa-right-from-bracket"/>
        },
    ]

    return (
        <div  className={isOpen ?'admin-s-container' : 'admin-close-sidebar'}>
            <div className={isOpen ? 'admin-sidebar': 'mobile-sidebar'}>
                <div className='top-section'>
                <div className='menu-icon'><i class="fa-solid fa-bars" onClick={toggle}/></div>
                    <h4 style={{display:isOpen ? "block" : "none"}} >Candidate Dashboard</h4>
                </div>
                <hr style={{display:isOpen ? "block" : "block"}}/>
                {
                    menuItem.map((items, index)=>(
                        <NavLink to={items.path} key={index} className="nav-links" activeclassName="active">

                            <div  className='link-icon'>{items.icon}</div>
                            <div style={{display:isOpen ? "block" : "none"}} className='link-text'>{items.name}</div>
                           
                        </NavLink>
                    ))
                }
            </div>
                <main>{children}</main>
        </div>
    )
}

export default CandidateSideBar;