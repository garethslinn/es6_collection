var gulp = require('gulp');
//var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src('app/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

/*
gulp.task('watch', function () {
    gulp.watch('app/*.js', ['default'])
});

gulp.task('default', ['watch']);

    */