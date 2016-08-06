'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

/************* 第一阶段 */

test('Promise2 is a function.',
  t => t.is('function', typeof Promise2)
);

test('Promise2 has static function resolve',
  t => t.is('function', typeof Promise2.resolve)
);

test('Promise2 has static function reject',
  t => t.is('function', typeof Promise2.reject)
);

test('Promise2 has static function race',
  t => t.is('function', typeof Promise2.race)
);

test('Promise2 has static function all',
  t => t.is('function', typeof Promise2.all)
);

let p1 = new Promise2((resolve, reject) => { });

test('new Promise2 is a Promise2 instance',
  t => t.is(true, p1 instanceof Promise2)
);

test('Promise2 instace muse has function catch',
  t => t.is('function', typeof p1.catch)
);

test('Promise2 instace muse has function then',
  t => t.is('function', typeof p1.then)
);

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