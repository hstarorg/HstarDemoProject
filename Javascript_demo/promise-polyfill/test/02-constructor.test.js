'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

/****************第二阶段 */
test('Promise2 must has one param',
  t => t.is(1, Promise2.length)
);

test('new Promise2 with an object should throw error.',
  t => t.throws(() => new Promise2({}), TypeError)
);

test('new Promise2 must execute t.pass',
  t => {
    t.plan(1);
    new Promise2((resolve, reject) => {
      t.pass();
    });
  }
);

test.cb('', t => {
  t.plan(2);
  let p = new Promise2((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });

  p.then(data => {
    t.is('ok', data);
  });
  p.then(data => {
    t.pass();
    t.end();
  });
});

test.cb('', t => {
  t.plan(1);
  let p = new Promise2((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 1000); 
  });
  p.catch(reason => {
    t.is('error', reason);
    t.end();
  });
});