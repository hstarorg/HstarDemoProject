const locallydb = require('locallydb');
const config = require('./config');
const content = require('./content');

const db = new locallydb('locallydb_db');

const collection = db.collection('tests');

function run() {
  console.time('t1');
  let i = 0;
  for (i = 0; i < config.total; i++) {
    console.log(i);
    collection.insert({
      id: `test${i}`,
      name: `Name-${Math.random()}`,
      value: content
    });
  }
  collection.save();
  console.timeEnd('t1');;
}

run();
