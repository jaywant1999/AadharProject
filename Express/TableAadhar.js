const { BIGINT, STRING, ENUM, DATE } = require("sequelize");
const { Sequelize } = require("./Database");

const aadhartable = Sequelize.define(
  "aadhaartable",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true,
      allowNull: false,
      validate: {
        min: 100000000000,
        max: 999999999999,
      },
    },
    FirstName: {
      type: STRING(45),
      allowNull: false,
    },
    MiddleName: {
      type: STRING(45),
      allowNull: true,
    },
    LastName: {
      type: STRING(45),
      allowNull: false,
    },
    Gender: {
      type: ENUM("M", "F", "O"),
      allowNull: false,
    },
    DOB: {
      type: DATE,
      allowNull: false,
    },
    MobileNumber: {
      type: STRING(10),
      allowNull: false,
      unique: true,
      validate: {
        len: [10, 10],
        isNumeric: true,
      },
    },
    Email: {
      type: STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { aadhartable };
