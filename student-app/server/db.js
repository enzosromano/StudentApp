const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "student_webapp",
  password: "Test01!@#",
  database: "student_webapp",
});

module.exports = db;
