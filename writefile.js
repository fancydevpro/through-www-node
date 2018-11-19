var fs = require('fs');

fs.writeFile('temp/mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});