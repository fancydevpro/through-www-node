var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rhs_db',
})

con.connect(function (err) {
  if (err) throw err
  con.query("select * from persons", function (err, result, fields) {
    if (err) throw err
    console.log('select from result: ', result)
  })
})