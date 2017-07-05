const sqlite3 = require('sqlite3').verbose();
const config = require('./config');
const content = require('./content');

var db;

function createDb() {
  console.log("createDb chain");
  db = new sqlite3.Database('tests.sqlite3', createTable);
}

function createTable() {
  console.log("createTable lorem");
  insertRows();
  // db.run("CREATE TABLE TESTS(id int, name varchar(50), value text)", insertRows);
}

function insertRows() {
  console.log("insertRows Ipsum i");
  console.time('t1');
  var stmt = db.prepare("INSERT INTO TESTS VALUES (?, ?, ?)");

  let i = 0;
  for (i = 0; i < config.total; i++) {
    console.log(i);
    stmt.run(`test${i}`, `Name-${Math.random()}`, content);
  }
  stmt.finalize(() => {
    console.timeEnd('t1');
  });
}

createDb();
