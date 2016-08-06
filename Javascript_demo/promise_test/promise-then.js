/**
 * 
 */

let p = new Promise((resolve, reject) => {
  console.log('start');
  setTimeout(() => {
    resolve('abc');
    resolve('cde');
  }, 1000);
});

setTimeout(() => {
  p.then(data => {
    console.log(data);
  });
}, 2000);
