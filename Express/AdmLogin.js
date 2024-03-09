const { Sequelize } = require("./Database");
const { STRING, BIGINT } = require("sequelize");

const admtbl = Sequelize.define(
  "admlogin",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true
    },
    password: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { admtbl };
