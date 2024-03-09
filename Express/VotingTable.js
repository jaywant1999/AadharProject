const { BIGINT } = require("sequelize");
const { Sequelize } = require("./Database");

const votingtable = Sequelize.define(
  "votingtable",
  {
    Votingid: {
      type: BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    Userid: {
      type: BIGINT,
    },
    Candidateid: {
      type: BIGINT,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { votingtable };
