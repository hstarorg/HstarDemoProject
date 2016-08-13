'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

test('Promise.resolve will return new resolved promise instance.', t => {
  let p1 = Promise2.resolve(1);
  t.is(true, p1 instanceof Promise2);

  let p2 = Promise2.resolve('abc');
  t.is(true, p2 instanceof Promise2);

  let p3 = Promise2.resolve({ k: 1 });
  t.is(true, p3 instanceof Promise2);

  let tmpP = new Promise2((resolve, reject) => resolve('test'));
  let p4 = Promise2.resolve(tmpP);
});

test('Promise.resolve will return new rejected promise instance.', t => {
  let p1 = Promise2.resolve(1);
  t.is(true, p1 instanceof Promise2);

  let p2 = Promise2.resolve('abc');
  t.is(true, p2 instanceof Promise2);

  let p3 = Promise2.resolve({ k: 1 });
  t.is(true, p3 instanceof Promise2);

  let tmpP = new Promise2((resolve, reject) => resolve('test'));
  let p4 = Promise2.resolve(tmpP);
});