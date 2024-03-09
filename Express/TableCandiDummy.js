const { Sequelize } = require("./Database");
const { STRING, BIGINT, ENUM } = require("sequelize");

const dummycandiTable = Sequelize.define(
  "dummycandi",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true,
    },

    fname: {
      type: STRING,
    },
    lname: {
      type: STRING,
    },
    gender: {
      type: ENUM("M", "F", "O"),
    },
    partyname: {
      type: STRING,
    },
    status:{
      type : ENUM('PENDING', 'APPROVED', 'REJECTED') ,
      default:"PENDING" 
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { dummycandiTable };
