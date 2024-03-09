const sequelize = require("sequelize");

const DBNAME = "e_voting";
const USERNAME = "root";
const PASSWORD = "qwer1234";

const HOST = "127.0.0.1";
const PORT = 3306;

const Sequelize = new sequelize(DBNAME, USERNAME, PASSWORD, {
  port: PORT,
  host: HOST,
  dialect: "mysql",
});

module.exports = { Sequelize };
