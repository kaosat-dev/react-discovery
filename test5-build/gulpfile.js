/*var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'));
});*/


// watch the project, compile and reload the browser on changes
var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
//var browserSync = require('browser-sync');

var argv = require('yargs').argv;
var fileToCompile = argv.input;

gulp.task('compile', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/'+fileToCompile);
  return b.bundle()
    .pipe(source(fileToCompile))
    .pipe(gulp.dest('./dist'));
});


// start server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["src/*.js", "src/*.jsx", "index.html", "app.css"], ['compile', browserSync.reload]);
});
