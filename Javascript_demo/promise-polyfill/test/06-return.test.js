'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

test('Should return valid value.', t => {
  let p = new Promise2((resolve, reject) => {
    setTimeout(() => {
      resolve('abc');
    }, 1000);
  });
  t.is('unresolved', p._state);
  t.is(null, p._result);

  t.plan(2);
  setTimeout(() => {
    t.is('has-resolution', p._state);
    t.is('abc', p._result);
  }, 1200);
});