var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
  con.query('CREATE DATABASE rhs_db', function (err, result) {
    if (err) {
      console.log('Create Error: ', err)
      throw err
    }
    console.log('Result: ', result)
  })
})