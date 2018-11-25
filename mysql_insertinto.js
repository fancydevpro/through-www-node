var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rhs_db',
})

con.connect(function (err) {
  if (err) {
    console.log('Error => ', err)
    throw err
  }
  console.log('===== Connected! =====')
  var sql = `
    insert into persons (PersonID, LastName) values (1, 'John')
  `
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('insert result: ', result)
  })
})