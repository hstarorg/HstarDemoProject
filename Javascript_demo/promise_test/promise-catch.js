/**
 * 通过catch注册onRejected方法
 */

let p = Promise.reject('error');

p.then(undefined, err => {
  console.log('reject', err);
});

p.catch(err => {
  console.log('catch', err);
});
