/**
 * 通过Promise.reject，可以直接返回一个rejected的Promise实例
 */

let p = Promise.reject('reject');

p.then(data => {
  console.log(data);
}, err => {
  console.log(err);
});

p.catch(err => {
  console.log('catch', err);
});

p.catch(err => {
  console.log('catch', err);
});