const fs = require('fs');
const swig = require('swig');

let tpl = swig.precompile(fs.readFileSync(__dirname + '/views/index.html', 'utf8'));

const runTest = (file, data) => {
  return swig.run(tpl.tpl, data);
};

module.exports = {
  name: 'swig',
  runTest
};