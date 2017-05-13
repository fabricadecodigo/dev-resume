var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('src/assets/less/devresume.less')
        .pipe(less())
        .pipe(gulp.dest('src/assets/css'))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('src/assets/css/devresume.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/assets/css'))
});

// Run everything
gulp.task('default', ['less', 'minify-css']);

// Dev task with browserSync
gulp.task('dev', ['less', 'minify-css', 'minify-js'], function() {
    gulp.watch('src/assets/less/*.less', ['less']);
    gulp.watch('src/assets/css/*.css', ['minify-css']);
});
