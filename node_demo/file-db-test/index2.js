const loki = require('lokijs');
const config = require('./config');
const content = require('./content');
const db = new loki('loki.json');

console.time('t1');
var tests = db.addCollection('tests');
let i = 0;
for (i = 0; i < config.total; i++) {
  console.log(i);
  tests.insert({
    id: `test${i}`,
    name: `Name-${Math.random()}`,
    value: content
  });
}

db.save((err) => {
  console.log(err);
  console.timeEnd('t1');
});

