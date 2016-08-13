'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

test('Promise.reject will return new rejected promise instance.', t => {
  let p1 = Promise2.reject(1);
  t.is(true, p1 instanceof Promise2);

  let p2 = Promise2.reject('abc');
  t.is(true, p2 instanceof Promise2);

  let p3 = Promise2.reject({ k: 1 });
  t.is(true, p3 instanceof Promise2);

  let tmpP = new Promise2((resolve, reject) => resolve('test'));
  let p4 = Promise2.reject(tmpP);
});