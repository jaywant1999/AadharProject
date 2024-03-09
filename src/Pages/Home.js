 
import "../css/Home.css";
import aadhaaimg from '../images/Adhar.avif';

const Home = () => {
  return (
    <>
      <div className="home-main-div">
        <div className="home-info">
          <p>
            <h4 >Aadhaar Based E-Voting System</h4>
            The Aadhar-Based E-Voting System is a standalone, self-contained
            product designed to modernise and enhance the electoral process by
            introducing electronic voting with Aadhar authentication. It is not
            a replacement for existing systems but rather an innovative solution
            to streamline and secure the voting experience.
            <br />
            <br />
           
            <t/>Our project is creating a user-friendly electronic voting system
            that uses Aadhar for secure voter authentication. The goal is to
            make voting transparent, efficient, and in line with legal
            requirements. This aligns with our broader aim of promoting trust in
            electronic voting systems and supporting democratic values. The
            project focuses on real-time updates, scalability, and data security
            to enhance the overall integrity of the electoral process.
          </p>
        </div>
        <div className="aadhaar-reg">
          <h4>Aadhaar portal link</h4>
          <br />
          <a
            target="_blank"
            href="https://uidai.gov.in/en/my-aadhaar/get-aadhaar"
          >
            https://uidai.gov.in/en/my-aadhaar/get-aadhaar
          </a>
          <img src={aadhaaimg}/>
        </div>
      </div>
    </>
  );
};

export default Home;
