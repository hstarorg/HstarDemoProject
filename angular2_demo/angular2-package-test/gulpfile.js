const gulp = require('gulp');
const concat = require('gulp-concat');

let isRelease = process.argv.indexOf('-r') > 0;

let angular2Libs = [
  './node_modules/zone.js/dist/zone.js',
  './node_modules/rxjs/bundles/Rx.js',
  './node_modules/reflect-metadata/Reflect.js',
  './node_modules/@angular/core/bundles/core.umd.js',
  './node_modules/@angular/common/bundles/common.umd.js',
  './node_modules/@angular/compiler/bundles/compiler.umd.js',
  './node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
  './node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  './node_modules/@angular/forms/bundles/forms.umd.js',
  './node_modules/@angular/http/bundles/http.umd.js',
  './node_modules/@angular/router/bundles/router.umd.js'
];

if (isRelease) {
  angular2Libs = angular2Libs.map(item => {
    if (item.indexOf('Reflect.js') > 0) {
      return item;
    }
    return item.replace(/\.js$/, '.min.js');
  });
}

gulp.task('build', () => {
  return gulp.src(angular2Libs).pipe(concat(isRelease ? 'angular2.umd.min.js' : 'angular2.umd.js'))
    .pipe(gulp.dest('./dist'));
});