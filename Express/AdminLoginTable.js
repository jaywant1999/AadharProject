const { STRING } = require("sequelize");
const { Sequelize } = require("./Database");

const admintable = Sequelize.define(
  "adminlogintable",
  {
    id: {
      type: STRING,
      primaryKey: true,
    },
    password: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { admintable };
