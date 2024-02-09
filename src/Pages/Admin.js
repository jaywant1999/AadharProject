 import '../css/Admin.css'
 import { useNavigate } from 'react-router-dom';

const Admin=()=>{
    const navigate = useNavigate();

        const goToAdminHome =()=>{
            alert('It will redirect to the admin home page'); // Show an alert when the button is clicked
            navigate('/adminhome'); // Navigate to the admin home page
        }

    return(
        <> 
         <div class="login-page">
         <div class="form">
         <form class="login-form">
         <input type="text" placeholder="username"/>
         <input type="password" placeholder="password"/>
         <button onClick={goToAdminHome}>login</button>
         <p class="message">forgot password? <a href="#">Click here</a></p>
         </form>
 
        </div>
        </div>
        </>
    );

}

export default Admin;