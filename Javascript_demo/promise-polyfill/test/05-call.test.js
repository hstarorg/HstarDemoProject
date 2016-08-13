'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

test('Promise.resolve will call resolve callback', t => {
  t.plan(1);
  Promise2.resolve('a')
    .then(data => {
      t.is('a', data);
    });
});

test('Promise.reject will call reject callback', t => {
  t.plan(1);
  Promise2.reject('a')
    .then(() => { }, data => {
      t.is('a', data);
    });
});

test('Promise.reject will pass multi', t => {
  t.plan(3);
  let p = Promise2.reject('a');
  p.then(() => { }, data => t.is('a', data));
  p.catch(data => t.is('a', data));
  p.catch(data => t.is('a', data));
});