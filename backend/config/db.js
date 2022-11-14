const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'todoapp',
  password: ''
});

module.exports =  con;