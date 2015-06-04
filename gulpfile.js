var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
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

gulp.task('autoprefix', function(){
  return gulp.src('./css/*.css')
    .pipe(autoprefixer({
      browsers:['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('default',['stylus','scripts','autoprefix','watch']);