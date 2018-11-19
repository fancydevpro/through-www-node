var fs = require('fs');

fs.appendFile('temp/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw error;
  console.log('Saved!');
});