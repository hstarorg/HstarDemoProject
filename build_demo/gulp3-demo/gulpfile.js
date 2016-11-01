require('shelljs/global');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const notifier = require('node-notifier');

const notify = (message, title) => {
  notifier.notify({
    title: title || 'Default Title',
    message: message
  });
};

gulp.task('clean', done => {
  rm('-rf', 'dist');
  notify('清理完成！');
  done();
});

gulp.task('copy', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('t1', done => {
  setTimeout(() => {
    console.log('task1');
    done();
  }, 2000);
});

gulp.task('t2', done => {
  setTimeout(() => {
    console.log('task2');
    done();
  }, 1000);
});

gulp.task('t3', done => {
  setTimeout(() => {
    console.log('task3');
    done();
  }, 1500);
});

gulp.task('t4', done => {
  console.log('task4');
  done();
});

gulp.task('t5', done => {
  console.log('task5');
  done();
});

gulp.task('default', runSequence(
  ['clean'],
  ['copy'],
  ['clean'],
  ['t1', 't2', 't3'],
  ['t4', 't5']
));