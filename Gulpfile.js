
var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

var config = {
  scripts: {
    src: ['app/**/*.js',],
    dist: 'dist/**/*.js'
  },
  styles: {
    src: 'src/scss/*.scss',
    build: 'dist/src/css/',
    output: 'main.css'
  }
};

gulp.task('es6', function() {
  return gulp.src(['app/**/*.js', '!app/modules' ])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp
    .src(config.styles.src)
    .pipe(sass())
    .pipe(concat(config.styles.output))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.styles.build));
});



gulp.task('watch', function() {
    gulp.watch(config.styles.src, ['styles']),
    gulp.watch(config.scripts.src, ['es6']);
});



gulp.task('default',['es6','styles']);
gulp.task('dev', ['es6', 'styles','watch']);

