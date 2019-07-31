var mysql = require("mysql");
var inquirer = require("inquirer");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "P3pp3r102!",
    database: "burgers_db"
  });
};

connection.connect();
module.exports = connection;