const fs = require('fs');
const vash = require('vash');

let tpl = vash.compile(fs.readFileSync(__dirname + '/views/index.html', 'utf8'));

const runTest = (file, data) => {
  return tpl(data);
};

module.exports = {
  name: 'vash',
  runTest
};