const Datastore = require('nedb')
const config = require('./config');
const content = require('./content');

const db = new Datastore({ filename: 'nedb.json', autoload: true });

function insertRow(i) {
  return new Promise((resolve, reject) => {
    console.log(i);
    db.insert({
      id: `test${i}`,
      name: `Name-${Math.random()}`,
      value: content
    }, err => {
      resolve();
    });
  });
}

function run() {
  console.time('t1');
  var pArr = [];
  let i = 0;
  for (i = 0; i < config.total; i++) {
    pArr.push(insertRow(i));
  }
  Promise.all(pArr)
    .then(() => {
      console.timeEnd('t1');
    });
}

run();
