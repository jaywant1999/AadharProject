const router = require("express").Router();
const bcrypt = require("bcrypt");
const { aadhartable } = require("./TableAadhar");
const { candiTable } = require("./TableCandidate");
const { dummycandiTable } = require("./TableCandiDummy");
const { AddElectionTable } = require("./AddElection");
const { admintable } = require("./AdminLoginTable");
const { logintable } = require("./Table");
const { votingtable } = require("./VotingTable");
///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * => getAadharData {This API  is used to fetch the data of user with given AADHAR number}
 */
const getAadharData = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await aadhartable.findByPk(id);

    if (!resource) {
      return res.status(404).json({ message: "User is not registered" });
    }

    res.status(200).json(resource);
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

  // Checking empty fields
  if (!AadhaarNumber || !password) {
    return res.status(400).json({ message: "Please enter all the details" });
  }

  // Retrieving user data from the local server
  let userData = await logintable.findByPk(AadhaarNumber);

  if (!userData) {
    return res.status(404).json({ message: "Data does not exist" });
  } else {
    const match = await bcrypt.compare(password, userData.password); //Returns boolean value  whether it matches or not
    // Comparing hashed password with entered password using bcrypt compare method
    if (!match) {
      return res.status(401).json({ message: "Invalid Password!" });
    } else {
      return res.status(200).json({ message: "Valid User!" });
    }
  }
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the hashed password to the database
    const data = { AadhaarNumber: AadhaarNumber, password: hashedPassword };
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
    const data = await dummycandiTable.findAll({});
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

  if (!id || !password) {
    return res.status(400).json({ message: "Please enter all the details" });
  } else {
    let admin = await admintable.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Data does not exist" });
    } else {
      const validPass = await bcrypt.compare(password, admin.password);
      if (!validPass) {
        return res.status(401).json({ message: "Invalid Password!" });
      } else {
        return res.status(200).json({ message: "Valid User!" });
      }
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateStatusOfCandidate = async (req, res) => {
  try {
    const data = req.body;
    const temp = { ...data };
    delete temp.AadhaarNumber; //First delete primary key from data
    const updatedData = await dummycandiTable.update(temp, {
      where: { AadhaarNumber: data.AadhaarNumber },
    });
    res.json(updatedData);
  } catch (error) {}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const verifyCandidateCredential = async (req, res) => {
  const { AadhaarNumber, password } = req.body;

  // Checking empty fields
  if (!AadhaarNumber || !password) {
    return res.status(400).json({ message: "Please enter all the details" });
  }

  // Retrieving user data from the local server
  let userData = await candiTable.findByPk(AadhaarNumber);

  if (!userData) {
    return res.status(404).json({ message: "Data does not exist" });
  } else {
    const match = await bcrypt.compare(password, userData.password); //Returns boolean value  whether it matches or not
    // Comparing hashed password with entered password using bcrypt compare method
    if (!match) {
      return res.status(401).json({ message: "Invalid Password!" });
    } else {
      return res.status(200).json({ message: "Valid User!" });
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const addUserVote = async (req, res) => {
  const data = req.body;
  try {
    const response = await votingtable.create(data);
    res.status(200).json({ message: "Vote successfully counted!!!" });
  } catch (error) {
    res.json(error);
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/:reqid", getUserCredential); // to fetch user credential
router.post("/addDummyCandidate", addDummyCandidate);
router.post("/addelection", addElection);
router.get("/get/election/list", getelectionlist);
router.post("/get/candidate/list", fetchAllCandidate);
router.post("/fromaadhartable/:reqid", getAadharData); // to fetch aadhar data from Aadhaar Table
router.post("/add/admin", addNewAdmin);
router.post("/verify/admin", verifyAdmin);
router.post("/addCandidate", postCredentialCandidate); // To Add Candidates Credentials
router.get("/candidates/:reqid", getCandiCredential);
router.post("/adduserinuserlogin", postUserCredential); //This will add user credential in user login table
router.post("/verifyusercredential", verifyUserCredential); ///verify the credential with password {http://localhost:1234/verify}
router.put("/update/candidate/status", updateStatusOfCandidate); //to update candidate status
router.post("/verifyCandidateCredential", verifyCandidateCredential); ///verify the credential with password {http://localhost:1234/verify}
router.post("/add/your/vote", addUserVote);

module.exports = router;
