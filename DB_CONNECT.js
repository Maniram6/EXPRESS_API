var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "system",
  password: "dbms123"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports = con;