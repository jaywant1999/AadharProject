const { Sequelize } = require("./Database");
const { STRING, BIGINT } = require("sequelize");

const candiTable = Sequelize.define(
  "candidatelogintable",
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

module.exports = { candiTable };