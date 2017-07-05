const loki = require('lokijs');
const config = require('./config');
const content = require('./content');
const db = new loki('loki.json');

console.time('t1');
db.loadDatabase({}, function () {
  var tests = db.getCollection('tests');
  console.log('count', tests.count());
  let i = 0;
  for (i = 0; i < config.total; i++) {
    if (i % 20 === 0) {
      console.log(i);
    }
    tests.insert({
      id: `test${i}`,
      name: `Name-${Math.random()}`,
      value: content
    });
  }

  db.saveDatabase((err) => {
    console.log(err);
    console.timeEnd('t1');
  });
});
