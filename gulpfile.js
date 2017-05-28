let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');


gulp.task('default', ['compress', 'watch']);

gulp.task('styles', function() {
    gulp.src('assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/out/'));
});

gulp.task('compress', ['styles'], function() {
  gulp.src(['assets/js/**/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src(['assets/css/**/*.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function() {
  gulp.watch([
    'assets/js/*.js',
    'assets/css/*.css',
    'assets/css/*.scss'
  ], ['compress']);
});