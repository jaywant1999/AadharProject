const { Sequelize } = require("./Database");
const { STRING, BIGINT } = require("sequelize");

const logintable = Sequelize.define(
  "userlogintable",
  {
    AadhaarNumber: {
      type: BIGINT,
      primaryKey: true,
    },

    password: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { logintable };
