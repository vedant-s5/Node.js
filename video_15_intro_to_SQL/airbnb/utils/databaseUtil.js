const mysql = require('mysql2');

const pool = mysql.createPool({
  hsot: 'localhost',
  user: 'root',
  password: 'Krishvedant@5',
  database: 'airbnb'
})

module.exports = pool.promise();

/* yha pe hamne ye info isilia di hai jisse agar hame database se
connnection banana hai to bar bar mention nhi krni padengi chize 
ab use pta rhega ki ham airbnb wala database use krre hai*/