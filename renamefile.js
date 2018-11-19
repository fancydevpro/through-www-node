var fs = require('fs');

fs.rename('temp/mynewfile1.txt', 'temp/myrenamedfile1.txt', function (err) {
  if (err) throw err;
  console.log('File renamed!');
});