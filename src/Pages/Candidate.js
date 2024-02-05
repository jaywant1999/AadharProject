
import '../css/Candidate.css';

function Candidate() {

    return (

        <div className='container1'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline' ></div>
            </div>
            <div className='Inputs'>
                <div className='Input'>
                    <input id="ip" type='text' inputMode='numeric' placeholder='Aadhar Number' />
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
                     
                         <label className='gender'>
                            Select your gender :
                            <select >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            </select>
                        </label>
                         
               
                 </div>
            </div>

            <div className='btnclass'>
                <button className='btn'>Submit</button>
                <button className='btn'>Login</button>
            </div>
          </div>
    );
}

export default Candidate;