////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { logintable } = require("./Table");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { aadhartable } = require("./TableAadhar");
const { candiTable } = require("./TableCandidate");
const { dummycandiTable } = require("./TableCandiDummy");
const { AddElectionTable } = require("./AddElection");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

router.post("/fromaadhartable/:reqid", getAadharData); // to fetch aadhar data from Aadhaar Table
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUserCredential = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await logintable.findByPk(id);

    if (!resource) {
      return res
        .status(200)
        .json({ message: "User is not registered", isExist: true });
    }

    res.status(200).json(resource);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};

router.get("/:reqid", getUserCredential); // to fetch user credential

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To check the user is already exist or not in Login table

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

router.post("/adduserinuserlogin", postUserCredential); //This will add user credential in user login table
////////////////////////////////////////////////////////////////////////////////////////////

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
router.post("/verifyusercredential", verifyUserCredential); ///verify the credential with password {http://localhost:1234/verify}
/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getCandiCredential = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await candiTable.findByPk(id);

    if (!resource) {
      return res.status(200).json({ message: "User is not registered" });
    }

    res.status(200).json(resource);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error. Please try after some time" });
  }
};

router.get("/candidates/:reqid", getCandiCredential);
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const postCredentialadm = async (req, res) => {
//   try {
//     const { AadhaarNumber, password } = req.body;

//     // Hash the password using bcrypt
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Save the hashed password to the database
//     const data = { AadhaarNumber, password: hashedPassword };
//     const temp = await admtbl.create(data); // assuming logintable is a model that has a create method

//     res.json(temp); // return the saved data as a response
//   } catch (error) {
//     // handle any errors that occur during the process
//     res.status(500).json({ error: "An error occurred while saving the data." });
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////////////////////

// const updateCredential = async (req, res) =>{
//     try {
//       const { AadhaarNumber, password } = req.body;

//       // Check if AadhaarNumber is provided
//       if (!AadhaarNumber) {
//         return res.status(400).json({ error: "Aadhaar Number is required" });
//       }

//       // Check if password is provided
//       if (!password) {
//         return res.status(400).json({ error: "Password is required" });
//       }

//       // Your code to update the password in the database goes here
//       const hashedPassword=await bcrypt.hash(password, 10);
//       const updatedUser = await logintable.update({password:hashedPassword}, {where:{AadhaarNumber}});

//       // Send response back with status and message
//       return res.status(200).json({message:"Updated Successfully!", data:updatedUser});
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Error Updating Data!" });
//     }
// }

// const updateData = async (req, res) => {
//   const data = req.body;
//   const std = { ...data };
//   delete std.id;
//   const upd = await table.update(std, {
//     where: {
//       id: data.id,
//     },
//   });
// };

// const updateCredential = async (req, res) => {
//   const { AadhaarNumber, password } = req.body;
//   try {
//     if (!AadhaarNumber) {
//       return res.status(400).json({ error: "Aadhaar Number is required" });
//     }
//     if (!password) {
//       return res.status(400).json({ error: "Password is required" });
//     }
//     const user = await logintable.findByPk(AadhaarNumber);
//     if (!user) {
//       return res.status(400).json({ error: "Invalid Aadhaar Number" });
//     }
//     const salt = user.Salt;
//     const isValidPassword = await bcrypt.compare(password, user.Password, salt);
//     if (!isValidPassword) {
//       return res.status(401).send({ auth: false, token: null }).end();
//     } else {
//       let newPass = await bcrypt.hash(password, salt);
//       await logintable.update(
//         { Password: newPass },
//         { where: { AadhaarNumber } }
//       );
//       return res.status(200).send("Updated Successfully");
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Error in updating credentials");
//   }
// };

// router.post("/addadm", postCredentialadm);
//Adds new credential {http://localhost:1234/add}

// router.put(":/id", updateCredential); //Updates existing credential by Id and otp verification

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const postCredentialAdmin = async (req, res) => {
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
//////////////////////////////////////////////////////////////////////////////////////////

router.post("/addCandidate", postCredentialAdmin);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const getAadharData = async (req, res) =>{
//   const AadharNumber=req.params.reqid;
//   try{
//    const data = await aadhartable.findByPk(AadharNumber);
//    if(!data){
//      throw Error('User not found');
//    }else{
//      return res.status(200).json(data);
//    }
//   }catch(err){
//     console.log(err);
//     return res.status(404).json({message:"Not Found!"});
//   }

// };

// router.get("/", getAllData);

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

const addElection = async (req, res) => {
  const data = req.body;
  console.log(data.electname);
  console.log(data.electdate);

  try {
    
    const response = await AddElectionTable.create(data);
  res.json(response);

  } catch (error) {
    console.log(`Error occured`,error);
  }
  
};

const getelectionlist = async (req, res) => {
  try {
    const result = await AddElectionTable.findAll({});
    res.json(result);
  } catch (error) {
    console.log("Error occured reffer Router.js", error);
  }
};

router.post("/addDummyCandidate", addDummyCandidate);
router.post("/addelection", addElection);
router.get("/get/election/list", getelectionlist);

module.exports = router;
