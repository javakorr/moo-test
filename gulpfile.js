var gulp = require('gulp'),
    open = require('gulp-open');

gulp.task('default', function() {
    gulp.src('./views/index.html').pipe(open());
});
