const path = require('path');
// console.log(path.join(__dirname, 'text.txt'));

const fs = require('fs');

const read = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});

read.on('data', (data) => {
  console.log(data);
  // process.stdout.write(data);
});
