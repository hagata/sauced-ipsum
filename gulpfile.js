var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('stylus', function () {
  gulp.src('./_styl/global.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch('_styl/*', ['stylus']);
 
});

gulp.task('default',['stylus','watch']);