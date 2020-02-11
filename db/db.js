const mysql = require("mysql2");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("ID " + connection.threadId);
});

module.exports = connection;