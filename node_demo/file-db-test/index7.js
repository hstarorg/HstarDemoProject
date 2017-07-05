const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const content = require('./content');

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, async function (err, db) {
  console.log("Connected successfully to server");
  console.time('t1');
  let collection = db.collection('tests');
  var pArr = [];
  let i = 0;
  for (i = 0; i < config.total; i++) {
    console.log(i);
    pArr.push(collection.insert({
      id: `test${i}`,
      name: `Name-${Math.random()}`,
      value: content
    }));
  }
  Promise.all(pArr)
    .then(() => {
      console.timeEnd('t1');
    });
  console.log('over', 'total count', await collection.count());
  db.close();
});
