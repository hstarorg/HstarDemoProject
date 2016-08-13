'use strict';

let test = require('ava');
let Promise2 = require('./../Promise2');

// test('simple use', t => {
//   t.plan(1);
//   let p = new Promise2((resolve, reject) => {
//     resolve('abc');
//   });
//   p.then(data => t.is('abc', data));
// });

test('async use', t => {
  t.plan(1);
  new Promise2((resolve, reject) => {
    setTimeout(() => {
      resolve(50);
    }, 200);
  })
    .then(data => {
      console.log('async', data);
      t.is(50, data);
    });
});

// test('连续then', t => {
//   t.plan(1);
//   new Promise2((resolve, reject) => {
//     setTimeout(() => resolve('step1'), 1000);
//   })
//     .then(data => {
//       return new Promise2((resolve, reject) => {
//         setTimeout(() => resolve(data + 'step2'), 1000);
//       });
//     })
//     .then(data => t.is('step1step2', data));
// });

// test('simple reject', t => {
//   t.plan(2);
//   Promise2.reject('abc')
//     .then(null, reason => t.is('abc', reason))
//     .catch(reason => t.is('abc1', reason));
// });

// test('simple resolve', t => {
//   t.plan(2);
//   Promise2.resolve('abc')
//     .then(data => t.is('abc', data))
//     .then(data => t.is('abc', data));
// });

