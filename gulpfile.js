const path = require('path')
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const env = require('gulp-env')

gulp.task('set-env', function() {
  env({
    vars: {
      'NODE_ENV': 'test'
    }
  });
});

gulp.task('test', ['set-env'], function() {
  gulp
    .src(
      path.join('test', '/**/*.test.js'), 
      { read: false }
    )
    .pipe(
      mocha({
        reporter: 'list',
        require: ['should'],
        timeout: 5000
      })
    )
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    })
  ;
});