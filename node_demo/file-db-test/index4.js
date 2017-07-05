const levelup = require('levelup');
const config = require('./config');
const content = require('./content');

const db = levelup('levelup_db');

function insertRow(i) {
  return new Promise((resolve, reject) => {
    console.log(i);
    db.put(`test${i}`, {
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
    }).catch(err => {
      console.log(err);
    });
}

run();
