var fs = require('fs')
var rs = fs.createReadStream('temp/mynewfile3.txt')

rs.on('open', function () {
  console.log('The file is open')
})