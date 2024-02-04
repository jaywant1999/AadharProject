
import '../css/Candidate.css';

function Candidate() {

    return (

        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline' ></div>
            </div>
            <div className='Inputs'>
                <div className='Input'>
                    {/* <img src={img1} alt='' /> */}
                    <input type='text' inputMode='numeric' placeholder='Aadhar Number' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='text' placeholder='First Name' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='text' placeholder='Middle Name' />
                </div>
                <div className='Input'>
                    <img src='' alt='' />
                    <input type='text' placeholder='Last Name' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='date' placeholder='Date of Birth' />
                </div>



                <div className='Input'>
                    Gender :
                    <img src='' alt='' />
                    <div>
                        <span>
                            <input type='radio' name="Gender" value="Male" /> Male
                            <input type='radio' name="Gender" value="Female" /> Female
                            <input type='radio' name="Gender" value="Other" /> Other
                        </span>
                    </div>
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='number' placeholder='Annual Income' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='number' placeholder='Criminal cases' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='text' placeholder='Address' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='number' placeholder='Pincode' />
                </div>

                <div className='Input' >
                    <input type='text' placeholder='Party Name' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='number' placeholder='Ward Number' />
                </div>

                <div className='Input'>
                    <img src='' alt='' />
                    <input type='password' name="password" placeholder='Password' />
                </div>
                <div className='Input'>
                    <input type='password' name='password' placeholder='Re-Enter Password' />
                </div>

                <div className='submit-container'>
                    <div className='submit'>Submit</div>
                    <div className='submit'>Login</div>
                </div>
            </div>
        </div>
    );
}

export default Candidate;