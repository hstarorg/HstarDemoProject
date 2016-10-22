const gulp = require('gulp');
const concat = require('gulp-concat');


gulp.task('build:vendor', () => {
  return gulp.src([
    'node_modules/zone.js/dist/zone.js', //min
    'node_modules/rxjs/bundles/Rx.js', //min
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/@angular/core/bundles/core.umd.js', //min
    'node_modules/@angular/compiler/bundles/compiler.umd.js', //min
    'node_modules/@angular/common/bundles/common.umd.js', //min
    'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js', //min
    'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js', //min
    'node_modules/@angular/router/bundles/router.umd.js', //min
    'node_modules/@angular/forms/bundles/forms.umd.js', //min
    'node_modules/@angular/http/bundles/http.umd.js' //min
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', gulp.series('build:vendor'));
