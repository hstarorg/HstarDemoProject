'use strict';

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('after 2000ms.')
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(a);
    resolve('after 1000ms error.')
  }, 1000);
});

Promise.all([p1, p2])
.then((data) => {
  console.log(data);
})
.catch(err => console.log('err'));

(new Promise((a, b) => {console.log(c);})).catch(aa => console.error(aa, 'aa');