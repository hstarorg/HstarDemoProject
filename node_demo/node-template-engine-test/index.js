const fs = require('fs');
const util = require('./util');

const engines = [];
fs.readdirSync('./engines').forEach(name => {
  let engine = require(`./engines/${name}`);
  engines.push(engine);
});

const dataCount = 100;
const maxCount = 10000;
const data = util.buildData(dataCount);

console.log(`${dataCount}条数据，执行${maxCount}次`)

engines.forEach(engine => {
  console.log(`正在测试引擎： ${engine.name}`);
  console.time(engine.name);
  util.runFn(() => {
    engine.runTest('index', data)
  }, maxCount);
  console.timeEnd(engine.name);
  console.log('-------------------------------');
});
