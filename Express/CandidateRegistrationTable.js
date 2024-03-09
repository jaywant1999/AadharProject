const { BIGINT, STRING, DATE, DOUBLE, ENUM, INTEGER } = require("sequelize");
const { Sequelize } = require("./Database");

const candidateregistration = Sequelize.define(
  "candidateregistrationfinal",
  {
    candidateaadhar: {
      type: BIGINT,
      primaryKey: true,
    },
    firstname: {
      type: STRING,
      allowNull: false,
    },
    middlename: {
      type: STRING,
      allowNull: false,
    },
    lastname: {
      type: STRING,
      allowNull: false,
    },
    dob: {
      type: DATE,
      allowNull: false,
    },
    profession: {
      type: STRING,
      allowNull: false,
    },
    annualincome: {
      type: DOUBLE,
      allowNull: false,
    },
    gender: {
      type: ENUM("M", "F", "O"),
      allowNull: false,
    },
    city: {
      type: STRING,
      allowNull: false,
    },
    state: {
      type: STRING,
      allowNull: false,
    },
    taluka: {
      type: STRING,
      allowNull: false,
    },
    district: {
      type: STRING,
      allowNull: false,
    },
    country: {
      type: STRING,
      allowNull: false,
    },
    partyname: {
      type: STRING,
      allowNull: false,
    },
    pincodeself: {
      type: STRING,
      allowNull: false,
    },
    areapincode: {
      type: STRING,
      allowNull: false,
    },
    wardnumber: {
      type: INTEGER,
      allowNull: false,
    },
    criminalcase: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    mobile: {
      type: BIGINT,
      unique: true,
      allowNull: false,
    },
    highestqualification: {
      type: STRING,
      allowNull: false,
    },
    status: {
      type: ENUM("PENDING", "APPROVED", "REJECTED"),
      default:"PENDING",
    }
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { candidateregistration };
