var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-ruby-sass');


// start server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    startPath: "/",
    port: 3030
  });
});

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('./js/*js');
});

// process CSS files and return the stream.
gulp.task('css', function () {
  return gulp.src('./css/*css');
});

// process html files and return the stream.
gulp.task('html', function () {
  return gulp.src('./*html');
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({'sourcemap=none': true}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./css'));
});

// use default task to launch BrowserSync and watch JS files
gulp.task('default', ['browser-sync'], function () {
  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch(["./sass/*.scss"], ['sass']);
  gulp.watch(["./js/*.js","./css/*.css","*.html"], ['js', 'css', 'html', browserSync.reload]);
});