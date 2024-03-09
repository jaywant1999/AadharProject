const { Sequelize } = require("./Database");
const { INTEGER, STRING, DATE } = require("sequelize");


const AddElectionTable = Sequelize.define(
  "addelection",
  {
    electid: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    electname: {
      type: STRING,
    },
    electdate: {
      type: DATE,

    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { AddElectionTable };
