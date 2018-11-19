var fs = require('fs');

fs.unlink('temp/mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});