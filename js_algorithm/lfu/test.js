const LFUCache = require('./lfu');
const assert = require('assert');

var keyValueFixtures = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
  f: '6',
  g: '7',
  h: '8',
  i: '9',
  j: '10'
};

function putFixturesIntoCache(cache, size) {
  Object.keys(keyValueFixtures).forEach(function(key) {
    cache.put(key, keyValueFixtures[key]);
    if (keyValueFixtures[key] >= size) {
      return false;
    }
  });
}

describe('LFUCache', function() {
  it('should return cached value', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('a'), '1');
  });

  it('should not keep more than maxItems', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.put('c', '3');
    assert.equal(cache.get('a'), null);
    assert.equal(cache.get('b'), '2');
    assert.equal(cache.get('c'), '3');
  });

  it('should keep first value if second is never accessed', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.get('a');
    cache.put('c', '3');

    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('b'), null);
    assert.equal(cache.get('c'), '3');
  });

  it('should keep first value if accessed more than second', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.get('a');
    cache.get('a');
    cache.get('b');
    cache.put('c', '3');

    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('b'), null);
    assert.equal(cache.get('c'), '3');
  });

  it('should evict oldest if frequencies match', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.get('a');
    cache.get('a');
    cache.get('b');
    cache.get('b');
    cache.put('c', '3');

    assert.equal(cache.get('a'), null);
    assert.equal(cache.get('b'), '2');
    assert.equal(cache.get('c'), '3');
  });

  // This tests that head frequency set is removed when it hits 0 length.
  it('should correctly evict >0 frequencies', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.get('a');
    cache.get('a');
    cache.get('a');
    cache.get('b');
    cache.get('b');
    cache.put('c', '3'); // head frequencySet is removed.

    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('b'), null);
    assert.equal(cache.get('c'), '3');
  });

  // // This tests that non-head set is removed when it hits 0 length.
  it('should evict LFU after oldest of equal evicted', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.get('a');
    cache.get('a');
    cache.get('b');
    cache.get('b');
    cache.put('c', '3');
    // Frequencies: a = 2, b =  2, c = 1
    // 'a' evicted.
    assert.equal(cache.get('a'), null);

    cache.get('b');
    cache.get('c');
    // Frequences: b = 3, c = 2

    cache.put('d', '4');
    // Frequencies: b = 3, c = 2, d = 1
    // 'c' evicted
    assert.equal(cache.get('c'), null);

    assert.equal(cache.get('a'), null);
    assert.equal(cache.get('b'), '2');
    assert.equal(cache.get('c'), null);
    assert.equal(cache.get('d'), '4');
  });

  it('should remove LFU of ten', function() {
    var cache = new LFUCache(10);
    putFixturesIntoCache(cache, 10);
    // Access all but e once
    cache.get('a');
    cache.get('b');
    cache.get('c');
    cache.get('d');
    // e is missing!
    cache.get('f');
    cache.get('g');
    cache.get('h');
    cache.get('i');
    cache.get('j');

    // Then push k and check that e is evicted.
    cache.put('k', '11');
    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('e'), null);
    assert.equal(cache.get('j'), '10');
  });

  it('should empty cache on flush', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.flush();
    assert.equal(cache.get('a'), null);
    assert.equal(cache.get('b'), null);
  });

  it('should be re-usable after flush', function() {
    var cache = new LFUCache(2);
    cache.put('a', '1');
    cache.put('b', '2');
    cache.flush();
    cache.put('a', '1');
    cache.put('b', '2');
    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('b'), '2');
  });

  it('should remove LFU of ten', function() {
    const cache = new LFUCache(10);
    putFixturesIntoCache(cache, 10);

    cache.get('a');
    cache.get('b');
    cache.get('c');
    cache.get('d');
    // e is missing!
    cache.get('f');
    cache.get('g');
    cache.get('h');
    cache.get('i');
    cache.get('j');

    cache.put('k', '11');
    assert.equal(cache.get('a'), '1');
    assert.equal(cache.get('e'), null);
    assert.equal(cache.get('j'), '10');
  });

  it('Leetcode lfu base test', function() {
    const cache = new LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    assert.equal(cache.get(1), 1);
    cache.put(3, 3); // evicts key 2
    assert.equal(cache.get(2), null);
    assert.equal(cache.get(3), 3);
    cache.put(4, 4); // evicts key 1.
    assert.equal(cache.get(1), null);
    assert.equal(cache.get(3), 3);
    assert.equal(cache.get(4), 4);
  });

  it('Leetcode zero size test', function() {
    const cache = new LFUCache(0);
    cache.put(0, 0);
    assert.equal(cache.get(0), null);
  });

  it('Leetcode complex test 1', function() {
    const cache = new LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    assert.equal(cache.get(1), 1);
    cache.put(3, 3);
    assert.equal(cache.get(2), null);
    assert.equal(cache.get(3), 3);
    cache.put(4, 4);
    assert.equal(cache.get(1), null);
    assert.equal(cache.get(3), 3);
    assert.equal(cache.get(4), 4);
  });

  it('Leetcode complex test 2', function() {
    const cache = new LFUCache(2);
    assert.equal(cache.get(2), null);
    cache.put(2, 6);
    assert.equal(cache.get(1), null);
    cache.put(1, 5);
    cache.put(1, 2);
    assert.equal(cache.get(1), 2);
    assert.equal(cache.get(2), 6);
  });

  it('Leetcode complex test 3', function() {
    const cache = new LFUCache(10);
    cache.put(10, 13);
    cache.put(3, 17);
    cache.put(6, 11);
    cache.put(10, 5);
    cache.put(9, 10);
    assert.equal(cache.get(13), null);
    cache.put(2, 19);
    assert.equal(cache.get(2), 19);
    assert.equal(cache.get(3), 17);
    cache.put(5, 25);
    assert.equal(cache.get(8), null);
    cache.put(9, 22);
    cache.put(5, 5);
    cache.put(1, 30);
    assert.equal(cache.get(11), null);
    cache.put(9, 12);
    assert.equal(cache.get(7), null);
    assert.equal(cache.get(5), 5);
    assert.equal(cache.get(8), null);
    assert.equal(cache.get(9), 12);
    cache.put(4, 30);
    cache.put(9, 3);
    assert.equal(cache.get(9), 3);
    assert.equal(cache.get(10), 5);
    assert.equal(cache.get(10), 5);
    cache.put(6, 14);
    cache.put(3, 1);
    assert.equal(cache.get(3), 1);
    cache.put(10, 11);
    assert.equal(cache.get(8), null);
    cache.put(2, 14);
    assert.equal(cache.get(1), 30);
    assert.equal(cache.get(5), 5);
    assert.equal(cache.get(4), 30);
    cache.put(11, 4);
    cache.put(12, 24);
    cache.put(5, 18);
    assert.equal(cache.get(13), null);
    cache.put(7, 23);
    assert.equal(cache.get(8), null);
    assert.equal(cache.get(12), 24);
    cache.put(3, 27);
    cache.put(2, 12);
    assert.equal(cache.get(5), 18);
    cache.put(2, 9);
    cache.put(13, 4);
    cache.put(8, 18);
    cache.put(1, 7);
    assert.equal(cache.get(6), 14);
    cache.put(9, 29);
    cache.put(8, 21);
    assert.equal(cache.get(5), 18);
    cache.put(6, 30);
    cache.put(1, 12);
    assert.equal(cache.get(10), 11);
    cache.put(4, 15);
    cache.put(7, 22);
    cache.put(11, 26);
    cache.put(8, 17);
    cache.put(9, 29);
    assert.equal(cache.get(5), 18);
    cache.put(3, 4);
    cache.put(11, 30);
    assert.equal(cache.get(12), null);
    cache.put(4, 29);
    assert.equal(cache.get(3), 4);
    assert.equal(cache.get(9), 29);
    assert.equal(cache.get(6), 30);
    cache.put(3, 4);
    assert.equal(cache.get(1), 12);
    assert.equal(cache.get(10), 11);
    cache.put(3, 29);
    cache.put(10, 28);
    cache.put(1, 20);
    cache.put(11, 13);
    assert.equal(cache.get(3), 29);
    cache.put(3, 12);
    cache.put(3, 8);
    cache.put(10, 9);
    cache.put(3, 26);
    assert.equal(cache.get(8), 17);
    assert.equal(cache.get(7), null);
    assert.equal(cache.get(5), 18);
    cache.put(13, 17);
    cache.put(2, 27);
    cache.put(11, 15);
    assert.equal(cache.get(12), null);
    cache.put(9, 19);
    cache.put(2, 15);
    cache.put(3, 16);
    assert.equal(cache.get(1), 20);
    cache.put(12, 17);
    cache.put(9, 1);
    cache.put(6, 19);
    assert.equal(cache.get(4), 29);
    assert.equal(cache.get(5), 18);
    assert.equal(cache.get(5), 18);
    cache.put(8, 1);
    cache.put(11, 7);
    cache.put(5, 2);
    cache.put(9, 28);
    assert.equal(cache.get(1), 20);
    cache.put(2, 2);
    cache.put(7, 4);
    cache.put(4, 22);
    cache.put(7, 24);
    cache.put(9, 26);
    cache.put(13, 28);
    cache.put(11, 26);
  });
});
