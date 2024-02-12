// db.js

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '34.29.125.63',
    //host: '/cloudsql/cs411-pt1-stage3-402920:us-central1:cs411-db-s3',
    //socketPath: '/cs411-pt1-stage3-402920:us-central1:cs411-db-s3',
    user: 'root',
    password: 'namesaredumb',
    database: 'courseoverflow'
});


connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  
module.exports = connection;
