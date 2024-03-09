const { BIGINT, STRING } = require("sequelize");
const { Sequelize } = require("./Database");

const addresstable = Sequelize.define(
  "addresstable",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true,
    },
    Country: {
      type: STRING,
    },
    State: {
      type: STRING,
    },
    District: {
      type: STRING,
    },
    Taluka: {
      type: STRING,
    },
    Village: {
      type: STRING,
    },
    Pincode: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);
module.exports = { addresstable };
