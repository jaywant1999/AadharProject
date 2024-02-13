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
      // get() {
      //   // Convert the date to a string without timezone conversion
      //   return moment(this.getDataValue('electdate')).format('MM-DD-YYYY');
      // },
      // set(val) {
      //   // Parse the date string and set it without timezone conversion
      //   const date = moment(val, 'MM-DD-YYYY');
      //   if (date.isValid()) {
      //     this.setDataValue('electdate', date.toDate());
      //   }
      // },
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = { AddElectionTable };
