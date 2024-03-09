import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/AdminSidebar.css";

const UserSideBar=({children})=>{

    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
     
    const menuItem=[
        {
            path:"/UserProfile",
            name:"User Profile",
            icon:<i class="fa-solid fa-address-card"/>
        },
        {
            path:"/UserAddElection",
            name:"Select Election",
            icon:<i class="fa-regular fa-hand-pointer"/>
        },
                
        {
            path:"/UserHelp",
            name:"Help",
            icon:<i class="fa-solid fa-circle-question"/>
        },
        {
            path:"/Result",
            name:"Result",
            icon:<i class="fa-solid fa-square-poll-vertical"></i>
        },
        {
            path:"/UserWelcomePage",
            name:"Logout",
            icon:<i class="fa-solid fa-right-from-bracket"/>
        },
     
    ]

    return (
        <div  className={isOpen ?'admin-s-container' : 'admin-close-sidebar'}>
            <div className={isOpen ? 'admin-sidebar': 'mobile-sidebar'}>
                <div className='top-section'>
                <div className='menu-icon'><i class="fa-solid fa-bars" onClick={toggle}/></div>
                    <h4 style={{display:isOpen ? "block" : "none"}} >User Dashboard</h4>
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
    );
}

export default UserSideBar;