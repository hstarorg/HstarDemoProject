const ECT = require('ect');
const renderer = ECT({ root: __dirname + '/views', ext: '.html' });

const runTest = (file, data) => {
  return renderer.render(file, data);
};

module.exports = {
  name: 'Ect',
  runTest
};
