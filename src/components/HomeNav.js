import { Component } from "react";
import "../css/HomeNav.css";

class HomeNav extends Component{
    state = {clicked: false};

    handleclick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return (
           <nav className="NavbarItems">
   
            <div className="logo"><h1 className="Navbar-logo">मेरा देश ,<br/> मेरा चुनाव ...</h1></div>
            <div className="menu-icon" onClick={this.handleclick}>

            <i className={this.state.clicked ? "fas fa-times"   :"fas fa-bars"}></i>
            </div> 
            
            <ul className={this.state.clicked ? "menu active" : "menu"}>
                <div className="link-items">
                <li >
                    <a className="links" href="/">
                        <i className="fa-solid fa-house"/>
                            Home 
                    </a>
                </li>
                
                <li>
                    <a className="links" href ="/About" >
                        <i class="fa-solid fa-circle-info"/>
                        About 
                    </a>
                </li>
               
                <li>
                    <a className="links" href="/Admin">
                        <i class="fa-solid fa-user-tie"></i>
                        Admin 
                    </a>
                </li>
                
                <li>
                    <a className="links" href="/Candidate">
                        <i class="fa-solid fa-user-large"></i>
                        Candidate 
                    </a>
                </li> 
                
                <li>
                    <a className="links" href="/User">
                        <i class="fa-solid fa-users-line"></i>
                        User 
                    </a>
                </li>

                <li>
                    <a className="links" href="/Help">
                        <i class="fa-solid fa-help-line"></i>
                        Help
                    </a>
                </li>
                
                </div>
            </ul>
        
           </nav> 
        )
    }
}

export default HomeNav;
