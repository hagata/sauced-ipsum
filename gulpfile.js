var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat');
;


gulp.task('stylus', function () {
  gulp.src('./_styl/global.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function(){
  return gulp.src('_scripts/*')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js/'))
})

gulp.task('watch', function() {
  gulp.watch('_styl/*', ['stylus']);
  gulp.watch('_styl/**/*', ['stylus']);
  gulp.watch('_scripts/*', ['scripts']);

 
});

gulp.task('default',['stylus','scripts','watch']);