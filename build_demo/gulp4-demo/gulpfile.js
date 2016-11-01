require('shelljs/global');
const gulp = require('gulp');
const notifier = require('node-notifier');

gulp.task('t1', done => {
  setTimeout(() => {
    console.log('task1, lazy 2000');
    done();
  }, 2000);
});

gulp.task('t2', done => {
  setTimeout(() => {
    console.log('task2, lazy 1500');
    done();
  }, 1500);
});

gulp.task('t3', done => {
  setTimeout(() => {
    console.log('task3, lazy 1000');
    done();
  }, 1000);
});

gulp.task('t4', done => {
  setTimeout(() => {
    console.log('task4, lazy 50');
    done();
  }, 50);
});

gulp.task('t5', done => {
  setTimeout(() => {
    console.log('task5, lazy 150');
    done();
  }, 150);
});

gulp.task('default', gulp.series(
  gulp.parallel('t1', 't2', 't3'),
  gulp.parallel('t4', 't5')
));