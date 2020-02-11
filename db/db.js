const mysql = require("mysql2");
let conn = {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
}
 if (process.env.JAWSDB_URL){
   conn = process.env.JAWSDB_URL
 }
  

let connection = mysql.createConnection(conn);

connection.connect(function (err) {
  if (err) throw err;
  console.log("ID " + connection.threadId);
});

module.exports = connection;