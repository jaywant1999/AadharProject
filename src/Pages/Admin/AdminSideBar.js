import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/AdminSidebar.css";

const AdminSideBar=({children})=>{

    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
     
    const menuItem=[
        {
            path:"/AdminProfile",
            name:"Profile",
            icon:<i class="fa-solid fa-address-card"/>
        },
        {
            path:"/AdminAddElection",
            name:"Add Election",
            icon:<i class="fa-solid fa-file-circle-plus"></i>
        },
        {
            path:"/Card",
            name:"Validation of candidates",
            icon:<i class="fa-solid fa-square-check"></i>
        },
        {
            path:"/AdminStatistics",
            name:"Statistics",
            icon:<i class="fa-solid fa-file-circle-plus"></i>
        },
        {
            path:"/AdminResult",
            name:"Election Result",
            icon:<i class="fa-solid fa-file-circle-plus"></i>
        },
        {
            path:"/AdminHelp",
            name:"Help",
            icon:<i class="fa-solid fa-circle-question"/>
        },
        {   
            path:"/AdminWelcomePage",
            name:"Logout",
            icon:<i class="fa-solid fa-right-from-bracket"/>
        },
    ]

    return (
        <div  className={isOpen ?'admin-s-container' : 'admin-close-sidebar'}>
            <div className={isOpen ? 'admin-sidebar': 'mobile-sidebar'}>
                <div className='top-section'>
                <div className='menu-icon'><i class="fa-solid fa-bars" onClick={toggle}/></div>
                    <h4 style={{display:isOpen ? "block" : "none"}} >Admin Dashboard</h4>
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

export default AdminSideBar;