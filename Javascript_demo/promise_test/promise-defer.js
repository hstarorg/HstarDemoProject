/**
 * 利用Deferred来包装Promise对象。
 */

let deferred = Promise.defer();

setTimeout(() => {
  deferred.resolve('abc');
}, 1000);

deferred.promise.then(data => {
  console.log(data);
});