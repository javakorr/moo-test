var gulp = require('gulp'),
    open = require('gulp-open');

gulp.task('default', function() {
    gulp.src('./index.html').pipe(open());
});
