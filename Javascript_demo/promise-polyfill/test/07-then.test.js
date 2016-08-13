'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

test('then will return new promise instance', t => {
  let p = new Promise2((resolve, reject) => {
    resolve('abc');
  });
  let p2 = p.then(data => {
    return Promise2.resolve(data + '+then2');
  });
  t.not(p, p2);
  t.plan(1);
  p2.then(data => t.is('abc+then2', data));
});