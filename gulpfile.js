var gulp = require('gulp');
var browserSync  = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('**/*.html', [browserSync.reload]);

});


// SASS
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// BROWSER SYNC
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false
    // online: false,
    // notify: false,
  });
});

gulp.task("default", ["browsersync", "watch"]);
