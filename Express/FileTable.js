const { BIGINT, STRING } = require("sequelize");
const { Sequelize } = require("./Database");

const Filedetails = Sequelize.define(
  "filedetailstable",
  {
    CandidateAadhaar: {
      type: BIGINT,
      primaryKey: true,
    },

    IncomeProof: {
      type: STRING,
    },
    QualificationFile: {
      type: STRING,
    },
    AddressProof: {
      type: STRING,
    },
    PartyLetter: {
      type: STRING,
    },
    CriminalClearance: {
      type: STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { Filedetails };
