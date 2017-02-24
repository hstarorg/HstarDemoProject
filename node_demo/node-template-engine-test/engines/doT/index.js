const fs = require('fs');
const dot = require('dot');

const tpl = dot.template(fs.readFileSync(__dirname + '/views/index.html', 'utf8'));
const runTest = (file, data) => {
  return tpl(data);
};

module.exports = {
  name: 'doT',
  runTest
};
