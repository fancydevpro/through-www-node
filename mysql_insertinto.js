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
  /*var sql = `
    insert into persons (PersonID, LastName) values (1, 'John')
  `
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log('insert result: ', result)
  })*/
  var sql = "insert into persons (PersonID, LastName, FirstName) values ?"
  var values = [
    [2, 'John', 'Highway 71'],
    [3, 'Peter', 'Lowstreet 4'],
    [4, 'Amy', 'Apple st 652'],
    [5, 'Hannah', 'Mountain 21'],
    [6, 'Michael', 'Valley 345'],
    [7, 'Sandy', 'Ocean blvd 2'],
    [8, 'Betty', 'Green Grass 1'],
    [9, 'Richard', 'Sky st 331'],
    [10, 'Susan', 'One way 98'],
    [11, 'Vicky', 'Yellow Garden 2'],
    [12, 'Ben', 'Park Lane 38'],
    [13, 'William', 'Central st 954'],
    [14, 'Chuck', 'Main Road 989'],
    [15, 'Viola', 'Sideway 1633']
  ]
  con.query(sql, [values], function (err, result) {
    if (err) throw err
    console.log('Result: ', result)
    console.log('Number of records inserted: ' + result.affectedRows)
  })
})