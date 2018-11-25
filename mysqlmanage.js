var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  //database: 'rhs_db',
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
  con.query('use rhs_db', function (err, result) {
    if (err) {
      console.log('Create Error: ', err)
      throw err
    }
    console.log('Result: ', result)
  })
  con.query(`
    CREATE TABLE Persons (
      PersonID int,
      LastName varchar(255),
      FirstName varchar(255),
      Address varchar(255),
      City varchar(255) 
    );
  `,
  function (err, result) {
    if (err) {
      console.log('Create Error: ', err)
      throw err
    }
    console.log('Result: ', result)
  })
})