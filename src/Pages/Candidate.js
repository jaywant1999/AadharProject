
import '../css/Candidate.css';
import { useNavigate } from 'react-router-dom';

function Candidate() {
    const navigate = useNavigate();
    const goToCandidateHome=()=>{
        alert('It will redirect to the candidate home page'); // Show an alert when the button is clicked
        navigate('/CandidateHomePage'); // Navigate to the user home page
    }

    return (

        <div className='container1'>
            <div className='header'>
                <div className='text'><b>Register</b></div>
               
            </div>
            <div className='Inputs'>
                <div className='Input'>
                    <input id="ip" type='number' inputMode='numeric' placeholder='Aadhar Number' />
                    <input id="ip" type='text' inputMode='text' placeholder='First Name' />
                    <input id="ip" type='text' inputMode='text' placeholder='Middle Name' />
                </div>
 
                <div className='Input'>
                    <input id="ip" type='text' inputMode='text' placeholder='Last Name' />
                    <input  id="ip" type='date' inputMode='text' placeholder='Date of Birth' />
                    <input id="ip" type='number' placeholder='Annual Income' />
                </div>

                <div className='Input'>
                         <input id="ip" type='text' placeholder='Party Name' />
                         <input id="ip" type='number' placeholder='Ward Number' />
                         <input id="ip" type='number' placeholder='Criminal cases' />
                </div>

                <div className='Input'>
                    <input id="ip" type='text' placeholder='Address' />
                    <input id="ip" type='number' placeholder='Pincode' />  
                    <input id="ip" type='password' name="password" placeholder='Password' />
                    
                </div>

                <div className='Input'>
                    <input id="ip" type='password' name='password' placeholder='Re-Enter Password' />
                    <input id="ip" type='password' name='password' placeholder='Re-Enter Password' />
                    
                    <label className='gender'>
                            Gender 
                        <select>
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        </label>
                    
                         
               
                 </div>
            </div>

            <div className='btnclass'>
                <button className='btn' id='sub' onClick={goToCandidateHome}>Submit</button>
                <button className='btn' id='log'>Login</button>
            </div>
          </div>
    );
}

export default Candidate;