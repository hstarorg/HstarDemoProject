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