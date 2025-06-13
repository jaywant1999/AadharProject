const router = require("express").Router();
const bcrypt = require("bcrypt");
const multer = require("multer");
const { aadhartable } = require("./TableAadhar");
const { candiTable } = require("./TableCandidate");
const { dummycandiTable } = require("./TableCandiDummy");
const { AddElectionTable } = require("./AddElection");
const { admintable } = require("./AdminLoginTable");
const { logintable } = require("./Table");
const { votingtable } = require("./VotingTable");
const sequelize = require("sequelize");
const { addresstable } = require("./AddressTable");
const { candidateregistration } = require("./CandidateRegistrationTable");
const { Filedetails } = require("./FileTable");

///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => getAadharData {This API  is used to fetch the data of user with given AADHAR number}
 */
const getAadharData = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await aadhartable.findByPk(id);

    if (!resource) {
      return res.status(404).json({ message: "User is not found", key: false }); ///////////
    }

    // Calculate age based on date of birth
    const dob = new Date(resource.DOB);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
      return res
        .status(200)
        .json({ message: "You are not eligible", key: true });
    }

    // res.status(200).json({ key: false , resource:resource});
    res.status(200).json({ resource });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};
///////////////////////////////////////////////////////////////////////////
const getAadharData1 = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await aadhartable.findByPk(id);

    if (!resource) {
      return res.status(200).json({ message: "User is not found" });
    }

    // Calculate age based on date of birth
    const dob = new Date(resource.DOB);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs); // miliseconds from epoch
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 18) {
      return res.status(200).json(resource);
    }

    // res.status(200).json({ key: false , resource:resource});
    res.status(200).json({ resource });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};
////////////////////////////////////////////////////////////////////////////////////////
/**
 * => getUserCredential {This API is used to fetch  the user credentials}
 *
 */

const getUserCredential = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await logintable.findByPk(id);

    if (!resource) {
      return res
        .status(200)
        .json({ message: "User is not registered", isExist: false });
    } else {
      return res
        .status(200)
        .json({ message: "User is already registered!", isExist: true });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => postUserCredential {This API  is used to add new User details in database.}
 */
const postUserCredential = async (req, res) => {
  try {
    const { AadhaarNumber, password } = req.body;
    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the hashed password to the database
    const data = { AadhaarNumber: AadhaarNumber, password: hashedPassword };
    const temp = await logintable.create(data); // assuming logintable is a model that has a create method

    res.json(temp); // return the saved data as a response
  } catch (error) {
    console.log("Eroor : ", error.message);
    // handle any errors that occur during the process
    res.status(500).json({
      error:
        "An error occurred while saving the data. or Your Aadhar number is not Valid!!!",
    });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => verifyUserCredential {This API  is used to validate  user credentials}
 */
const verifyUserCredential = async (req, res) => {
  const { AadhaarNumber, password } = req.body;

  console.log(`🔍 Received Login Request: AadhaarNumber=${AadhaarNumber}, Password=${password}`);

  if (!AadhaarNumber || !password) {
    console.log("❌ Missing Fields");
    return res.status(400).json({ message: "Please enter all the details" });
  }

  let userData = await logintable.findOne({ where: { AadhaarNumber } });

  if (!userData) {
    console.log("❌ User Not Found");
    return res.status(404).json({ message: "Data does not exist" });
  }

  console.log(`✅ User Found: ${JSON.stringify(userData.dataValues)}`);

  // Directly compare the plain text passwords
  if (password !== userData.password) {
    console.log("❌ Invalid Password!");
    return res.status(401).json({ message: "Invalid Password!" });
  }

  console.log("✅ Password Matched! Login Successful.");
  return res.status(200).json({
    message: "Valid User!",
    AadhaarNumber: userData.AadhaarNumber,
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => getCandiCredential {This API  will be used to fetch the candidate's login credentials}
 */
const getCandiCredential = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await candiTable.findByPk(id);

    if (!resource) {
      return res
        .status(200)
        .json({ message: "Candidate is not registered", isExist: false });
    } else {
      return res
        .status(200)
        .json({ message: "Candidate is already registered!", isExist: true });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};
///////////////////////////////////////////////////////////////////////////////////////
/**
 * => postCredentialAdmin {This API is used to register new  candidate in the system}
 */
const postCredentialCandidate = async (req, res) => {
  try {
    const { AadhaarNumber, password } = req.body;
    // Hash the password using bcrypt
    console.log("AadhaarNumber form api : ", AadhaarNumber);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the hashed password to the database
    const data = { AadhaarNumber: AadhaarNumber, password: hashedPassword };
    console.log("from router.171", data);
    const temp = await candiTable.create(data); // assuming candiTable is a model that has a create method

    res.json(temp); // return the saved data as a response
  } catch (error) {
    console.log("Eroor : ", error.message);
    // handle any errors that occur during the process
    res.status(500).json({
      error:
        "An error occurred while saving the data. or Your Aadhar number is not Valid!!!",
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => addDummyCandidate {This API is taking input from  user and adding it into dummy table}
 *
 */
const addDummyCandidate = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newData = await dummycandiTable.create(data);
    res.json(newData);
  } catch (e) {
    console.log("Hello");
    console.log(e.message);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => addElection {This API is  for admin to add election details in the Election Table.}
 *
 */
const addElection = async (req, res) => {
  const data = req.body;
  console.log(data.electname);
  console.log(data.electdate);

  try {
    const response = await AddElectionTable.create(data);
    res.json(response);
  } catch (error) {
    console.log(`Error occured`, error);
  }
};
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * => getelectionlist{This API  will return all the records of Election Table}
 */
const getelectionlist = async (req, res) => {
  try {
    const result = await AddElectionTable.findAll({});
    res.json(result);
  } catch (error) {
    console.log("Error occured reffer Router.js", error);
  }
};

///////////////////////////////////////////////////////////////////////////////////////////
/**
 * => fetchAllCandidate {This API  returns all candidate list from Candidates table}.
 */
const fetchAllCandidate = async (req, res) => {
  try {
    const data = await candidateregistration.findAll({});
    res.json(data);
  } catch (error) {
    console.log("Server Error : Reffer Router.js", error);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => addNewAdmin {This API  is used to add new admin in Admin table.}
 */
const addNewAdmin = async (req, res) => {
  try {
    const { id, password } = req.body;
    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the hashed password to the database
    const data = { id: id, password: hashedPassword };
    const temp = await admintable.create(data); // assuming logintable is a model that has a create method

    res.json(temp); // return the saved data as a response
  } catch (error) {
    console.log("Eroor : ", error.message);
    // handle any errors that occur during the process
    res.status(500).json({
      error: "An error occurred while saving the data.",
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => verifyAdmin {This API is  used for checking validating admin credentials}
 */
const verifyAdmin = async (req, res) => {
  const { id, password } = req.body;

  console.log(`🔍 Received Login Request: ${JSON.stringify(req.body)}`);

  if (!id || !password) {
    console.log(" Missing Fields");
    return res.status(400).json({ message: "Please enter all the details" });
  }

  let admin = await admintable.findByPk(id);

  if (!admin) {
    console.log(" Admin Not Found");
    return res.status(404).json({ message: "Data does not exist" });
  }

  console.log(`✅ Admin Found: ${JSON.stringify(admin.dataValues)}`);

  // Since passwords are stored in plain text, directly compare them
  if (password !== admin.password) {
    console.log(" Invalid Password!");
    return res.status(401).json({ message: "Invalid Password!" });
  }

  console.log("✅ Password Matched! Login Successful.");
  return res.status(200).json({ message: "Valid User!" });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateStatusOfCandidate = async (req, res) => {
  try {
    const data = req.body;
    const temp = { ...data };
    delete temp.candidateaadhar; //First delete primary key from data
    const updatedData = await candidateregistration.update(temp, {
      where: { candidateaadhar: data.candidateaadhar },
    });
    res.json(updatedData);
  } catch (error) {}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const verifyCandidateCredential = async (req, res) => {
  const { AadhaarNumber, password } = req.body;

  if (!AadhaarNumber || !password) {
    return res.status(400).json({ message: "Please enter all the details" });
  }

  try {
    console.log(`Checking AadhaarNumber: ${AadhaarNumber}`); // Debugging

    // Retrieve user data from the database
    let userData = await candiTable.findOne({ where: { AadhaarNumber } });

    if (!userData) {
      console.log("User not found in database"); // Debugging
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", userData.dataValues); // Debugging

    const storedPassword = userData.password;

    // Check if the stored password is hashed
    const isHashed = storedPassword.startsWith("$2b$");

    let match = false;

    if (isHashed) {
      // If password is hashed, compare using bcrypt
      match = await bcrypt.compare(password, storedPassword);
    } else {
      // If stored password is plain text, do a direct comparison
      match = password === storedPassword;

      // Convert plain-text password to hashed for future security
      const hashedPassword = await bcrypt.hash(storedPassword, 10);
      await userData.update({ password: hashedPassword });
      console.log("Converted plain-text password to hashed format.");
    }

    if (!match) {
      console.log("Password does not match!"); // Debugging
      return res.status(401).json({ message: "Invalid Password!" });
    }

    return res.status(200).json({
      message: "Valid User!",
      AadhaarNumber: userData.AadhaarNumber,
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const addUserVote = async (req, res) => {
  const data = req.body;
  const { Candidateid, Userid } = data;
  // const checkvote = await votingtable.findOne({ where: { UserId: Userid } });
  // if(checkvote)
  // {
  //   return res.status(200).json({isVoted:true, message:"User already voted!!!"})
  // }
  console.log("Data from frontend", data);

  try {
    const response = await votingtable.create(data);
    res.status(200).json({
      message: "Vote successfully counted!!!",
      responseData: response,
    });
  } catch (error) {
    res.json(error);
  }
};

const votingResult = async (req, res) => {
  try {
    const counts = await votingtable.findAll({
      attributes: [
        "candidateid",
        [sequelize.fn("COUNT", sequelize.col("candidateid")), "count"],
      ],
      group: ["candidateid"],
    });

    res.status(200).json({ counts });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const checkVotingStatus = async (req, res) => {
  try {
    const { Candidateid, Userid } = req.body;
    const data = await votingtable.findOne({ where: { Userid: Userid } });
    console.log("Printing", data);
    if (data) {
      return res
        .status(200)
        .json({ auth: false, msg: "You have already voted." });
    } else {
      return res.status(200).json({ auth: true, msg: "You can vote!!!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error! Try Again Later." });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUserAddressFromAadhar = async (req, res) => {
  try {
    const aadhar = req.params.aadhar;
    const address = await addresstable.findByPk(aadhar);
    console.log("Address from DB:", address);
    res.json(address);
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const addCandidateDetails = async (req, res) => {
  try {
    const data = req.body;
    console.log("My Main Data : ", data);
    const response = await candidateregistration.create(data);
    return res.json({ response: response }).status(200);
  } catch (error) {
    return res.json({ message: "Error in Saving Data to Database" });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// for storing files in the server machines
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//stroing in the database
router.post(
  "/file-upload/:id",
  upload.fields([
    { name: "incomeCertificate", maxCount: 1 },
    { name: "addressCertificate", maxCount: 1 },
    { name: "criminalCaseProof", maxCount: 1 },
    { name: "education", maxCount: 1 },
    { name: "partyProofCertificate", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log("Request body:", req.body); // Log the entire request body
    const AadhaarNumber = req.params.id;
    console.log("AadhaarNumber  : ", req.params.id);
    const {
      incomeCertificate,
      addressCertificate,
      criminalCaseProof,
      education,
      partyProofCertificate,
    } = req.files;

    try {
      const newFileDetail = await Filedetails.create({
        CandidateAadhaar: AadhaarNumber,
        IncomeProof: incomeCertificate[0].filename,
        AddressProof: addressCertificate[0].filename,
        PartyLetter: partyProofCertificate[0].filename,
        QualificationFile: education[0].filename,
        CriminalClearance: criminalCaseProof[0].filename,
      });
      res.send("Form submitted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const path = require("path");
const fs = require("fs");

// Define a route to handle file downloads
const downloadFile = async (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join("D:/upload", fileName);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the appropriate headers for the response
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    res.setHeader("Content-Type", "application/octet-stream");

    // Read the file and send it in the response
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).send("File not found");
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getCandidateDetails = async (req, res) => {
  try {
    const data = await candidateregistration.findAll({});
    res.json(data);
  } catch (error) {
    return res.json(error);
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const getCandidateByID = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await candidateregistration.findByPk(id);
    res.json(data);
  } catch (error) {
    return res.json(error);
  }
};

//////////////////////////////////////////////////////////////////////////////////

const getCandidateFiles = async (req, res) => {
  const id = req.params.id;
  try {
    const datafile = await Filedetails.findByPk(id);
    res.json(datafile);
  } catch (error) {
    return res.json(error);
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/votingresult", votingResult); // It is fetching  the result of election by counting votes for each candidate
router.get("/:reqid", getUserCredential); // to fetch user credential
router.post("/addDummyCandidate", addDummyCandidate); // Had to replace with => { addCandidateDetails }
router.post("/addelection", addElection);
router.get("/get/election/list", getelectionlist);
router.post("/get/candidate/list", fetchAllCandidate);
router.post("/fromaadhartable/:reqid", getAadharData);
router.get("/fromaadhartabledata/:reqid", getAadharData1); // to fetch aadhar data from Aadhaar Table
router.post("/add/admin", addNewAdmin);
router.post("/verify/admin", verifyAdmin);
router.post("/addCandidate", postCredentialCandidate); // To Add Candidates Credentials
router.post("/candidates/:reqid", getCandiCredential);
router.post("/adduserinuserlogin", postUserCredential); //This will add user credential in user login table
router.post("/verifyusercredential", verifyUserCredential); ///verify the credential with password {http://localhost:1234/verify}
router.put("/update/candidate/status", updateStatusOfCandidate); //to update candidate status
router.post("/verifyCandidateCredential", verifyCandidateCredential); ///verify the credential with password {http://localhost:1234/verify}
router.post("/add/your/vote", addUserVote);
router.post("/check/if/already/voted", checkVotingStatus); //It will check  whether the user has already voted or not
router.get("/get/users/address/fromaadhar/:aadhar", getUserAddressFromAadhar); //To get user address from Aadhar
router.post("/add/candidate/registration/details", addCandidateDetails); //To  save the details of candidates who are registering themselves for election
router.post("/get/candidateregistration", getCandidateDetails);
router.post("/get/candidate/by/:id", getCandidateByID);
router.post("/candidate/files/:id", getCandidateFiles);
router.post("/download/:fileName", downloadFile);

module.exports = router;
