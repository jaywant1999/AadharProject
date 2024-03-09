const { BIGINT, STRING, ENUM, DATE } = require("sequelize");
const { Sequelize } = require("./Database");

const aadhartable = Sequelize.define(
  "aadhaartable",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true,
    },

    FirstName: {
      type: STRING,
    },
    MiddleName: {
      type: STRING,
    },
    LastName: {
      type: STRING,
    },
    Gender: {
      type: ENUM("m", "f", "o"),
    },
    DOB: {
      type: DATE,
    },
    MobileNumber: {
      type: STRING,
    },
    Email: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = {aadhartable};
