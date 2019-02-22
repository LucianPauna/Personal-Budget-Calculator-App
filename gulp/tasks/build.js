var gulp = require('gulp'),
usemin = require('gulp-usemin'),
del = require('del'),
browserSync = require('browser-sync').create();

gulp.task('previewDocs', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('deleteDocsFolder', function() {
  return del('./docs');
});

gulp.task('copyImages', ['deleteDocsFolder'], function() {
  return gulp.src('./app/assets/images/**/*')
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin())
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDocsFolder', 'copyImages', 'usemin']);