const sequelize = require("sequelize");

const DBNAME = "e_voting";
const USERNAME = "root";
const PASSWORD = "mysql";

const HOST = "127.0.0.1";
const PORT = 3306;

// Create Sequelize instance
const Sequelize = new sequelize(DBNAME, USERNAME, PASSWORD, {
  host: HOST,
  port: PORT,
  dialect: "mysql",
  logging: console.log, // Enables query logging for debugging
  pool: {
    max: 5, // Maximum number of connections in the pool
    min: 0, // Minimum number of connections in the pool
    acquire: 30000, // Maximum time (ms) to acquire a connection
    idle: 10000, // Maximum time (ms) a connection can be idle
  },
});

// Test the database connection
Sequelize
  .authenticate()
  .then(() => { 
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });

module.exports = {Sequelize};
