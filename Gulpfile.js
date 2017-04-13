
var gulp = require('gulp');
var babel = require('gulp-babel');
var run = require('gulp-run-command').default;


var config = {
  scripts: {
    src: ['app/**/*.js',],
    dist: 'dist/**/*.js'
  },
};

gulp.task('es6', function() {
  return gulp.src(['app/**/*.js', '!app/modules' ])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch(config.scripts.src, ['es6']);
});



gulp.task('default',['es6']);
gulp.task( 'dev', ['es6', 'watch']);

