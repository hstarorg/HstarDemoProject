/**
 * 通过Promise.accept，可以直接返回一个resolved的Promise实例
 */

let p = Promise.accept('accept');

p.then(data => {
  console.log(data);
});