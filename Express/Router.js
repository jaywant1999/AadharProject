const { logintable } = require("./Table");
const { admtbl } = require("./AdmLogin");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { aadhartable } = require("./TableAadhar");

// const postCredential = async(req, res) =>{
//     const {AadhaarNumber, password} = req.body;
//     //use bcrypt here
//     const temp = await logintable.create(data);
//     res.json(temp);
// }
////////////////////////////////////////////////////////////////////////////////////
// const postCredential = async (req, res) => {
//   const { AadhaarNumber, password } = req.body;
//   // Hash the password using bcrypt
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   // Save the hashed password to the database
//   const data = { AadhaarNumber, password: hashedPassword };
//   const temp = await logintable.create(data);
//   res.json(temp);
// };
///////////////////////////////////////////////////////////////////////////////////

// const postCredential = async (req, res) => {
//   try {
//     const { AadhaarNumber, password } = req.body;
//     console.log("AadhaarNumber ",AadhaarNumber);
//     console.log("password ",password);
//     // Hash the password using bcrypt
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Save the hashed password to the database
//     const data = { AadhaarNumber, password: hashedPassword };
//     console.log("AadhaarNumber ",AadhaarNumber);
//     console.log("password ",password);

//     const temp = await logintable.create(data); // assuming logintable is a model that has a create method

//     res.json(temp); // return the saved data as a response
//   } catch (error) {
//     // handle any errors that occur during the process
//     res.status(500).json({ error: "An error occurred while saving the data." });
//   }
// };

const postCredential = async (req, res) => {
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

////////////////////////////////////////////////////////////////////////////////////////////

// const getAllData = async (req, res) => {
//   try {
//     let result = await logintable.findAll({});
//     console.log("result", result);
//     if (!result) {
//       throw new Error("No Data Found!");
//     } else {
//       return res.status(201).send(result);
//     }
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     return res.status(400).send("Server error!");
//   }
// };

const getUserCredential = async (req, res) => {
  try {
    const id = req.params.reqid;
    const resource = await logintable.findByPk(id);
    // const resource = await aadhartable.findByPk(id);

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

const verifyCredential = async (req, res) => {
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
router.post("/verify", verifyCredential); ///verify the credential with password {http://localhost:1234/verify}
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

router.post("/add", postCredential);
// router.post("/addadm", postCredentialadm);
//Adds new credential {http://localhost:1234/add}

// router.put(":/id", updateCredential); //Updates existing credential by Id and otp verification

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
router.get("/:reqid", getUserCredential); // to fetch user credential
router.post("/aadhar/:reqid", getAadharData); // to fetch aadhar data

module.exports = router;
