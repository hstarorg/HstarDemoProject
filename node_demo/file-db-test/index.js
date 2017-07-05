const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const config = require('./config');
const content = require('./content');
const db = low('lowdb.json', {
  storage: fileAsync
});

console.log(`total count:`, db.get('tests').size().value());

db.defaults({ tests: [] })
  .write()
  .then(async () => {
    console.time('t1');
    let i = 0;
    for (i = 0; i < config.total; i++) {
      console.log(i);
      db.get('tests')
        .push({
          id: `test${i}`,
          name: `Name-${Math.random()}`,
          value: content
        })
        .write();
    }
    console.timeEnd('t1');
  });


