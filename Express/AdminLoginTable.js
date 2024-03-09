const { INTEGER, STRING } = require("sequelize");
const { Sequelize } = require("./Database");

const admintable = Sequelize.define(
  "adminlogin",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    password: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { admintable };
