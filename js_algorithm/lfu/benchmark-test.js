const LFU = require('./lfu');
const TinyLFU = require('tiny-lfu-cache');

const lfu = new LFU(1000);
const tinyLfu = new TinyLFU(1000);

let i;

console.time('my_lfu');

// 设置10000个值，保留最后9000~10000
for (i = 1; i <= 10000; i++) {
  lfu.put(`key${i}`, i);
}

// 将9000~9500这500个key，全部访问100遍
for (i = 9000; i <= 9500; i++) {
  for (var b = 0; b < 100; b++) {
    lfu.get(`key${i}`);
  }
}

// 重新塞1000个key
for (i = 1; i <= 1000; i++) {
  lfu.put(`key${i}`, i);
}

console.log('长度是否符合预期：', lfu.length === 1000, lfu.length);

console.timeEnd('my_lfu');

console.time('tiny_lfu');

// 设置10000个值，保留最后9000~10000
for (i = 1; i <= 10000; i++) {
  tinyLfu.put(`key${i}`, i);
}

// 将9000~9500这500个key，全部访问100遍
for (i = 9000; i <= 9500; i++) {
  for (var b = 0; b < 100; b++) {
    tinyLfu.get(`key${i}`);
  }
}

// 重新塞1000个key
for (i = 1; i <= 1000; i++) {
  tinyLfu.put(`key${i}`, i);
}

console.timeEnd('tiny_lfu');
